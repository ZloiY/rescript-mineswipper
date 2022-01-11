open Webapi.Dom

module CellCmp = Belt.Id.MakeComparable({
  type t = (int, int)
  let cmp = ((rowA, colA), (rowB, colB)) => Pervasives.compare(rowA, rowB) == 0 ? Pervasives.compare(colA, colB) : Pervasives.compare(rowA, rowB)
})

let rows = 9
let cols = 9
let size = 30

let flaggedCellsSet  = ref(Belt.Set.make(~id=module(CellCmp)))
let revealedCellsSet = ref(Belt.Set.make(~id=module(CellCmp)))
let cellsDomMap      = ref(Belt.Map.make(~id=module(CellCmp)))

let mineField = document -> Document.getElementById("minefield")
let restart   = document -> Document.getElementById("restart")
let congrats  = document -> Document.getElementById("congrats")
let loh       = document -> Document.getElementById("loh")

let toggleElement = (element, displayValue) => {
   switch element {
  | Some(element) =>
    switch Element.asHtmlElement(element) {
    | Some(htmlElement) =>
      htmlElement
      -> HtmlElement.style
      -> CssStyleDeclaration.setProperty(_, "display", displayValue, "")
    | None => ()
    }
  | None => ()
  }
}

let neighbourCells = ((row, col): (int, int)): array<(int, int)> => {
  let neighbours = [
    (row, col + 1),
    (row, col - 1),
    (row + 1, col + 1),
    (row + 1, col - 1),
    (row - 1, col + 1),
    (row - 1, col - 1),
    (row + 1, col),
    (row - 1, col)
  ]
  let filter = ((row, col)) => {
    if row < 0 || col < 0 || row > rows - 1 || col > cols -1 {
      false
    } else  {
      true
    } 
  }

  Js.Array.filter(filter, neighbours)
}

let applyStyling = () => {
  switch mineField {
  | Some(mineField) => {
      switch Element.asHtmlElement(mineField) {
        | Some(htmlMineField) => {
          htmlMineField -> HtmlElement.style -> CssStyleDeclaration.setProperty(_, "width", j`${Belt.Int.toString(cols * size)}px`, "")
          htmlMineField -> HtmlElement.style -> CssStyleDeclaration.setProperty(_, "height", j`${Belt.Int.toString(rows * size)}px`, "")
        }
        | None => ()
      }
    }
  | None => ()
  } 
}

let showBombs = (bombsMap, cell) => {
  switch cellsDomMap.contents -> Belt.Map.get(_, cell) {
  | Some(domCell) =>
    switch domCell -> Element.asHtmlElement {
    | Some(htmlCell) => {
      toggleElement(loh, "block")
      htmlCell
      -> HtmlElement.style
      -> CssStyleDeclaration.setProperty(_, "background-color", "red", "")
    }
    | None => ()
    }
  | None => ()
  }
  bombsMap
  -> Belt.Map.reduce(_, [], (cells, cell, value) => 
    switch value {
    | 0 => Belt.Array.concat(cells, [cell])
    | _ => cells
    })
  -> Belt.Array.forEach(_, (cell) =>
    switch cellsDomMap.contents -> Belt.Map.get(_, cell) {
    | Some(domCell) => domCell -> Element.setTextContent(_, j`💣`)
    | None          => ()
    })
}

let revealCell = (bombsMap, cell, cellDom) => {
   let setBtnStyle = (value, color) => {
      cellDom -> Element.setTextContent(_, value)
      switch Element.asHtmlElement(cellDom) {
      | Some(htmlCell) => 
        htmlCell
        -> HtmlElement.style
        -> CssStyleDeclaration.setProperty(_, "color", color, "")
      | None => ()
      }
    }
    switch Belt.Map.get(bombsMap, cell) {
    | Some(0)     => showBombs(bombsMap, cell)
    | Some(1)     => setBtnStyle("1", "blue")
    | Some(2)     => setBtnStyle("2", "green")
    | Some(value) => setBtnStyle(Belt.Int.toString(value), "red")
    | None        =>
      switch Element.asHtmlElement(cellDom) {
      | Some(cellHtml) =>
        cellHtml
        -> HtmlElement.style
        -> CssStyleDeclaration.setProperty(_, "background-color", "grey", "")
      | None => ()
      }
    }
}

let rec revealCells = (bombsMap, cell) => {
  let reducer = (cell) => {
    switch Belt.Set.has(revealedCellsSet.contents, cell) {
    | true  => ()
    | false => {
      switch cellsDomMap.contents -> Belt.Map.get(_, cell) {
      | Some(cellDom) =>
        revealCell(bombsMap, cell, cellDom)
      | None => ()
      }

      revealedCellsSet.contents = Belt.Set.add(revealedCellsSet.contents, cell)
      revealCells(bombsMap, cell)
      }
    }
  }
  switch Belt.Map.has(bombsMap, cell) {
  | true  => ()
  | false => {
    cell
    -> neighbourCells
    -> Belt.Array.forEach(_,  reducer)
    }
  }
}

let toggleFlag = (cell, domCell) => {
  switch flaggedCellsSet.contents -> Belt.Set.has(_, cell) {
  | true => {
    flaggedCellsSet.contents = flaggedCellsSet.contents -> Belt.Set.remove(_, cell)
    domCell -> Element.setTextContent(_, "")
    }
  | false => {
    flaggedCellsSet.contents = flaggedCellsSet.contents -> Belt.Set.add(_, cell)
    domCell -> Element.setTextContent(_, j`🚩`)
    }
  }
}

let createButton = (bombsMap, cell) => {
  let cellDom = document -> Document.createElement("button")
  cellsDomMap.contents = cellsDomMap.contents -> Belt.Map.set(cell, cellDom)
  Element.addEventListener(cellDom, "contextmenu", (event) => {
    toggleFlag(cell, cellDom)
    Event.preventDefault(event)
    let bombsCells = Belt.Map.reduce(bombsMap, [], (arr, k, v) =>
      switch v {
      | 0 => Belt.Array.concat(arr, [k])
      | _ => arr
      })
    switch Belt.Set.cmp(flaggedCellsSet.contents, Belt.Set.fromArray(bombsCells, ~id=module(CellCmp))) {
    | 0 => toggleElement(congrats, "block")
    | _ => ()
    }
  })
  Element.addClickEventListener(cellDom, (_) => {
    revealCell(bombsMap, cell, cellDom)
    revealCells(bombsMap, cell)
  })
  switch Element.asHtmlElement(cellDom) {
  | Some(htmlCell) => {
    htmlCell
    -> HtmlElement.style
    -> CssStyleDeclaration.setProperty(_, "float", "left", "")
    htmlCell
    -> HtmlElement.style
    -> CssStyleDeclaration.setProperty(_, "width", j`${Belt.Int.toString(size)}px`, "")
    htmlCell
    -> HtmlElement.style
    -> CssStyleDeclaration.setProperty(_, "height", j`${Belt.Int.toString(size)}px`, "")
    }
  | None => ()
  }

  cellDom
}

let generateBombsMap = (bombs: array<(int, int)>) => {
  let bombsMap = Belt.Map.make(~id=module(CellCmp))
  let increaseDanger = (map, cell: (int, int)) => {
    switch Belt.Map.get(map, cell) {
    | Some(value) => value == 0 ? map : Belt.Map.set(map, cell, value + 1)
    | None        => Belt.Map.set(map, cell, 1)
    }
  }

  let reducer = (map, bombCell: (int, int)) => {
    bombCell -> neighbourCells -> Belt.Array.reduce(_, Belt.Map.set(map, bombCell, 0), increaseDanger)
  }

  bombs -> Belt.Array.reduce(_, bombsMap, reducer)
}

let rec generateBombs = (~gennedBombs: option<array<(int, int)>>=?, bombsCount: int): array<(int, int)> => {
  let genRandomRowId = () => Js.Math.random_int(0, rows)
  let genRandomColId = () => Js.Math.random_int(0, cols)
  let genCoordTuple = () => (genRandomColId(), genRandomRowId())
  let checkLength = (length, gennedBombs: array<(int, int)>): array<(int, int)> => if length < bombsCount {
       generateBombs(~gennedBombs=Js.Array.concat([genCoordTuple()], gennedBombs), bombsCount)
    } else {
      let bombs = Js.Array.reduce((withoutCoopies: array<(int, int)>, (col: int, row: int)) => {
        switch Js.Array.find(((col1, row1)) => row1 == row && col1 == col, withoutCoopies) {
        | Some(_) => withoutCoopies
        | None    => Js.Array.concat([(col, row)], withoutCoopies)
        }
      }, [gennedBombs[0]], gennedBombs)
      bombsCount == Belt.Array.length(bombs) ? bombs : generateBombs(~gennedBombs=bombs, bombsCount)
    }
  switch gennedBombs {
  | Some(gennedBombs) => checkLength(Belt.Array.length(gennedBombs), gennedBombs)
  | None => generateBombs(~gennedBombs=[genCoordTuple()], bombsCount)
  }
}

let generateField = () => {
  let bombsMap = generateBombs(9) -> generateBombsMap
  let reducer = (colId) => {
    Belt.Range.forEach(0, rows - 1, ((rowId) => {
      switch mineField {
      | Some(field) => {
          let btn = createButton(bombsMap, (colId, rowId))
          field -> Element.appendChild(btn)
        }
      | None => ()
      } 
    }))
  }
  Belt.Range.forEach(0, cols - 1, reducer)
}

let startGame = () => {
  applyStyling()
  generateField()
}

startGame()

switch restart {
| Some(restart) =>
  restart -> Element.addClickEventListener(_, (_) => {
    flaggedCellsSet.contents  = Belt.Set.make(~id=module(CellCmp))
    revealedCellsSet.contents = Belt.Set.make(~id=module(CellCmp))
    cellsDomMap.contents      = Belt.Map.make(~id=module(CellCmp))
    toggleElement(loh, "none")
    toggleElement(congrats, "none")
    switch mineField {
    | Some(field) =>
      let smth = field
      -> Element.children
      -> HtmlCollection.toArray
      -> Belt.Array.map(_, (child) => 
        field
        -> Element.removeChild(_, child))
      startGame()
    | None => ()
    }
  })
| None => ()
}