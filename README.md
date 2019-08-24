# nest-enum-escaping
When typeorm encounters an enum that has an apostraphe inside an enum of strings, it forms an incorrect query that will not run. The code to generate this is [here](https://github.com/duckies/nest-enum-escaping/blob/master/src/character.entity.ts).

# Error Message
```
Cannot connect:  { QueryFailedError: syntax error at or near "zhul"
    at new QueryFailedError (/mnt/d/User/Documents/GitHub/nest-enum-escaping/src/error/QueryFailedError.ts:9:9)
    at Query.callback (/mnt/d/User/Documents/GitHub/nest-enum-escaping/src/driver/postgres/PostgresQueryRunner.ts:178:30)
    at Query.handleError (/mnt/d/User/Documents/GitHub/nest-enum-escaping/node_modules/pg/lib/query.js:142:17)
    at Connection.connectedErrorMessageHandler (/mnt/d/User/Documents/GitHub/nest-enum-escaping/node_modules/pg/lib/client.js:211:17)
    at Connection.emit (events.js:193:13)
    at Connection.EventEmitter.emit (domain.js:481:20)
    at Socket.<anonymous> (/mnt/d/User/Documents/GitHub/nest-enum-escaping/node_modules/pg/lib/connection.js:126:12)
    at Socket.emit (events.js:193:13)
    at Socket.EventEmitter.emit (domain.js:481:20)
    at addChunk (_stream_readable.js:296:12)
  message: 'syntax error at or near "zhul"',
  name: 'QueryFailedError',
  length: 93,
  severity: 'ERROR',
  code: '42601',
  detail: undefined,
  hint: undefined,
  position: '71',
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'scan.l',
  line: '1134',
  routine: 'scanner_yyerror',
  query:
   `CREATE TYPE "character_realm_enum" AS ENUM('Hyjal', 'Frostwolf', 'Ner'zhul', 'Kil'jaeden', 'Blackrock', 'Tichondrius', 'Silver Hand', 'Doomhammer')`,
  parameters: [] }
```
