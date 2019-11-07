/**
 * @flow
 * @relayHash 03d5ac54945052b561cb5ba3c07668e7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppRepositoryNameQueryVariables = {||};
export type AppRepositoryNameQueryResponse = {|
  +repository: ?{|
    +name: string
  |}
|};
export type AppRepositoryNameQuery = {|
  variables: AppRepositoryNameQueryVariables,
  response: AppRepositoryNameQueryResponse,
|};
*/


/*
query AppRepositoryNameQuery {
  repository(owner: "facebook", name: "relay") {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "relay"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "facebook"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppRepositoryNameQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")",
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")",
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppRepositoryNameQuery",
    "id": null,
    "text": "query AppRepositoryNameQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f041295559a43de4cee97435d379fd0';
module.exports = node;
