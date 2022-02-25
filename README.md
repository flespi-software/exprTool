# exprTool

Flespi expressions tools includes: expressions testing tool, expressions functions list page

## Routes
| Route | Description |
|-|-|
| `/` | Main menu |
| `/expr` | Expressions testing tool |
| `/expr-functions` | Expressions functions list page |

## Query params
| Param | Description |
|-|-|
| `token` | Flespi token |
| `theme` | App theme ['dark', 'white' - default] |

## Integration events
| Event | Payload | Description |
|-|-|-|
| `ready` | *empty* | Ready to use |

## Integration commands
| Command | Payload | Description |
|-|-|-|
| `ExpressionsSetData` | TFlespiMessage|TFlespiMessage[] | Upload json data |
| `ExpressionsSetExpression` | string | Setup expression string |
| `ExpressionsSetColumns` | string[] | Setup columns names |
