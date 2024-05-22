export const txExample = {
  "tx": {
    "body": {
      "messages": [
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          "from_address": "noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln",
          "to_address": "noble19x4g3fd88x6we4xjhgteepgq2ut879mt4xr9kf",
          "amount": [
            {
              "denom": "uusdc",
              "amount": "1000000"
            }
          ]
        },
        {
          "@type": "/circle.cctp.v1.MsgDepositForBurn",
          "from": "noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln",
          "amount": "100000",
          "destination_domain": 1,
          "mint_recipient": "AAAAAAAAAAAAAAAANTdV+kw9jnPKUZDYaJSGbpvWq7g=",
          "burn_token": "uusdc"
        }
      ],
      "memo": "",
      "timeout_height": "0",
      "extension_options": [
      ],
      "non_critical_extension_options": [
      ]
    },
    "auth_info": {
      "signer_infos": [
        {
          "public_key": {
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            "key": "Az2bo3z3NubEB5IPHvR8Q6Q/TRidlgD7sHOSGvl1Zaek"
          },
          "mode_info": {
            "single": {
              "mode": "SIGN_MODE_DIRECT"
            }
          },
          "sequence": "13"
        }
      ],
      "fee": {
        "amount": [
          {
            "denom": "uusdc",
            "amount": "27953"
          }
        ],
        "gas_limit": "279528",
        "payer": "",
        "granter": ""
      }
    },
    "signatures": [
      "0ADJbuqHX91ZCBC1pB6vORh7fb/JKiNfI6w+tNwBvblA/q9XTAfrpkn/92nwvEs6ia+F1vXv718EqhPzgJmRKQ=="
    ]
  },
  "tx_response": {
    "height": "6285974",
    "txhash": "7635B16C71D33F37A4861DF71ECA1738234103317FB2960ACE8E23510C8A8249",
    "codespace": "",
    "code": 0,
    "data": "0A1E0A1C2F636F736D6F732E62616E6B2E763162657461312E4D736753656E640A290A212F636972636C652E636374702E76312E4D73674465706F736974466F724275726E12040888C101",
    "raw_log": "[{\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"noble19x4g3fd88x6we4xjhgteepgq2ut879mt4xr9kf\"},{\"key\":\"amount\",\"value\":\"1000000uusdc\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln\"},{\"key\":\"amount\",\"value\":\"1000000uusdc\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmos.bank.v1beta1.MsgSend\"},{\"key\":\"sender\",\"value\":\"noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"noble19x4g3fd88x6we4xjhgteepgq2ut879mt4xr9kf\"},{\"key\":\"sender\",\"value\":\"noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln\"},{\"key\":\"amount\",\"value\":\"1000000uusdc\"}]}]},{\"msg_index\":1,\"events\":[{\"type\":\"burn\",\"attributes\":[{\"key\":\"burner\",\"value\":\"noble1x74lhe0pqqv7rcg4pc4svtxhm9hnf79pxpfqfv\"},{\"key\":\"amount\",\"value\":\"100000uusdc\"}]},{\"type\":\"circle.cctp.v1.DepositForBurn\",\"attributes\":[{\"key\":\"amount\",\"value\":\"\\\"100000\\\"\"},{\"key\":\"burn_token\",\"value\":\"\\\"487039debedbf32d260137b0a6f66b90962bec777250910d253781de326a716d\\\"\"},{\"key\":\"depositor\",\"value\":\"\\\"noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln\\\"\"},{\"key\":\"destination_caller\",\"value\":\"\\\"\\\"\"},{\"key\":\"destination_domain\",\"value\":\"1\"},{\"key\":\"destination_token_messenger\",\"value\":\"\\\"AAAAAAAAAAAAAAAAayVTLhBgzhDMOwqZ5Wg7kb/eaYI=\\\"\"},{\"key\":\"mint_recipient\",\"value\":\"\\\"AAAAAAAAAAAAAAAANTdV+kw9jnPKUZDYaJSGbpvWq7g=\\\"\"},{\"key\":\"nonce\",\"value\":\"\\\"24712\\\"\"}]},{\"type\":\"circle.cctp.v1.MessageSent\",\"attributes\":[{\"key\":\"message\",\"value\":\"\\\"AAAAAAAAAAQAAAABAAAAAAAAYIgAAAAAAAAAAAAAAABX1OrxCRV3prfRISAq+9KAgTTxFwAAAAAAAAAAAAAAAGslUy4QYM4QzDsKmeVoO5G/3mmCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASHA53r7b8y0mATewpvZrkJYr7HdyUJENJTeB3jJqcW0AAAAAAAAAAAAAAAA1N1X6TD2Oc8pRkNholIZum9aruAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYagAAAAAAAAAAAAAAAAt6oX7G3aulrz1gBwNLKfM6baOvo=\\\"\"}]},{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5\"},{\"key\":\"amount\",\"value\":\"100000uusdc\"},{\"key\":\"receiver\",\"value\":\"noble1x74lhe0pqqv7rcg4pc4svtxhm9hnf79pxpfqfv\"},{\"key\":\"amount\",\"value\":\"100000uusdc\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln\"},{\"key\":\"amount\",\"value\":\"100000uusdc\"},{\"key\":\"spender\",\"value\":\"noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5\"},{\"key\":\"amount\",\"value\":\"100000uusdc\"},{\"key\":\"spender\",\"value\":\"noble1x74lhe0pqqv7rcg4pc4svtxhm9hnf79pxpfqfv\"},{\"key\":\"amount\",\"value\":\"100000uusdc\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/circle.cctp.v1.MsgDepositForBurn\"},{\"key\":\"sender\",\"value\":\"noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln\"},{\"key\":\"sender\",\"value\":\"noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5\"}]},{\"type\":\"noble.fiattokenfactory.MsgBurn\",\"attributes\":[{\"key\":\"amount\",\"value\":\"{\\\"denom\\\":\\\"uusdc\\\",\\\"amount\\\":\\\"100000\\\"}\"},{\"key\":\"from\",\"value\":\"\\\"noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5\\\"\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5\"},{\"key\":\"sender\",\"value\":\"noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln\"},{\"key\":\"amount\",\"value\":\"100000uusdc\"},{\"key\":\"recipient\",\"value\":\"noble1x74lhe0pqqv7rcg4pc4svtxhm9hnf79pxpfqfv\"},{\"key\":\"sender\",\"value\":\"noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5\"},{\"key\":\"amount\",\"value\":\"100000uusdc\"}]}]}]",
    "logs": [
      {
        "msg_index": 0,
        "log": "",
        "events": [
          {
            "type": "coin_received",
            "attributes": [
              {
                "key": "receiver",
                "value": "noble19x4g3fd88x6we4xjhgteepgq2ut879mt4xr9kf"
              },
              {
                "key": "amount",
                "value": "1000000uusdc"
              }
            ]
          },
          {
            "type": "coin_spent",
            "attributes": [
              {
                "key": "spender",
                "value": "noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln"
              },
              {
                "key": "amount",
                "value": "1000000uusdc"
              }
            ]
          },
          {
            "type": "message",
            "attributes": [
              {
                "key": "action",
                "value": "/cosmos.bank.v1beta1.MsgSend"
              },
              {
                "key": "sender",
                "value": "noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln"
              },
              {
                "key": "module",
                "value": "bank"
              }
            ]
          },
          {
            "type": "transfer",
            "attributes": [
              {
                "key": "recipient",
                "value": "noble19x4g3fd88x6we4xjhgteepgq2ut879mt4xr9kf"
              },
              {
                "key": "sender",
                "value": "noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln"
              },
              {
                "key": "amount",
                "value": "1000000uusdc"
              }
            ]
          }
        ]
      },
      {
        "msg_index": 1,
        "log": "",
        "events": [
          {
            "type": "burn",
            "attributes": [
              {
                "key": "burner",
                "value": "noble1x74lhe0pqqv7rcg4pc4svtxhm9hnf79pxpfqfv"
              },
              {
                "key": "amount",
                "value": "100000uusdc"
              }
            ]
          },
          {
            "type": "circle.cctp.v1.DepositForBurn",
            "attributes": [
              {
                "key": "amount",
                "value": "\"100000\""
              },
              {
                "key": "burn_token",
                "value": "\"487039debedbf32d260137b0a6f66b90962bec777250910d253781de326a716d\""
              },
              {
                "key": "depositor",
                "value": "\"noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln\""
              },
              {
                "key": "destination_caller",
                "value": "\"\""
              },
              {
                "key": "destination_domain",
                "value": "1"
              },
              {
                "key": "destination_token_messenger",
                "value": "\"AAAAAAAAAAAAAAAAayVTLhBgzhDMOwqZ5Wg7kb/eaYI=\""
              },
              {
                "key": "mint_recipient",
                "value": "\"AAAAAAAAAAAAAAAANTdV+kw9jnPKUZDYaJSGbpvWq7g=\""
              },
              {
                "key": "nonce",
                "value": "\"24712\""
              }
            ]
          },
          {
            "type": "circle.cctp.v1.MessageSent",
            "attributes": [
              {
                "key": "message",
                "value": "\"AAAAAAAAAAQAAAABAAAAAAAAYIgAAAAAAAAAAAAAAABX1OrxCRV3prfRISAq+9KAgTTxFwAAAAAAAAAAAAAAAGslUy4QYM4QzDsKmeVoO5G/3mmCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASHA53r7b8y0mATewpvZrkJYr7HdyUJENJTeB3jJqcW0AAAAAAAAAAAAAAAA1N1X6TD2Oc8pRkNholIZum9aruAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYagAAAAAAAAAAAAAAAAt6oX7G3aulrz1gBwNLKfM6baOvo=\""
              }
            ]
          },
          {
            "type": "coin_received",
            "attributes": [
              {
                "key": "receiver",
                "value": "noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5"
              },
              {
                "key": "amount",
                "value": "100000uusdc"
              },
              {
                "key": "receiver",
                "value": "noble1x74lhe0pqqv7rcg4pc4svtxhm9hnf79pxpfqfv"
              },
              {
                "key": "amount",
                "value": "100000uusdc"
              }
            ]
          },
          {
            "type": "coin_spent",
            "attributes": [
              {
                "key": "spender",
                "value": "noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln"
              },
              {
                "key": "amount",
                "value": "100000uusdc"
              },
              {
                "key": "spender",
                "value": "noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5"
              },
              {
                "key": "amount",
                "value": "100000uusdc"
              },
              {
                "key": "spender",
                "value": "noble1x74lhe0pqqv7rcg4pc4svtxhm9hnf79pxpfqfv"
              },
              {
                "key": "amount",
                "value": "100000uusdc"
              }
            ]
          },
          {
            "type": "message",
            "attributes": [
              {
                "key": "action",
                "value": "/circle.cctp.v1.MsgDepositForBurn"
              },
              {
                "key": "sender",
                "value": "noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln"
              },
              {
                "key": "sender",
                "value": "noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5"
              }
            ]
          },
          {
            "type": "noble.fiattokenfactory.MsgBurn",
            "attributes": [
              {
                "key": "amount",
                "value": "{\"denom\":\"uusdc\",\"amount\":\"100000\"}"
              },
              {
                "key": "from",
                "value": "\"noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5\""
              }
            ]
          },
          {
            "type": "transfer",
            "attributes": [
              {
                "key": "recipient",
                "value": "noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5"
              },
              {
                "key": "sender",
                "value": "noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln"
              },
              {
                "key": "amount",
                "value": "100000uusdc"
              },
              {
                "key": "recipient",
                "value": "noble1x74lhe0pqqv7rcg4pc4svtxhm9hnf79pxpfqfv"
              },
              {
                "key": "sender",
                "value": "noble12l2w4ugfz4m6dd73yysz477jszqnfughxvkss5"
              },
              {
                "key": "amount",
                "value": "100000uusdc"
              }
            ]
          }
        ]
      }
    ],
    "info": "",
    "gas_wanted": "279528",
    "gas_used": "150606",
    "tx": {
      "@type": "/cosmos.tx.v1beta1.Tx",
      "body": {
        "messages": [
          {
            "@type": "/cosmos.bank.v1beta1.MsgSend",
            "from_address": "noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln",
            "to_address": "noble19x4g3fd88x6we4xjhgteepgq2ut879mt4xr9kf",
            "amount": [
              {
                "denom": "uusdc",
                "amount": "1000000"
              }
            ]
          },
          {
            "@type": "/circle.cctp.v1.MsgDepositForBurn",
            "from": "noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln",
            "amount": "100000",
            "destination_domain": 1,
            "mint_recipient": "AAAAAAAAAAAAAAAANTdV+kw9jnPKUZDYaJSGbpvWq7g=",
            "burn_token": "uusdc"
          }
        ],
        "memo": "",
        "timeout_height": "0",
        "extension_options": [
        ],
        "non_critical_extension_options": [
        ]
      },
      "auth_info": {
        "signer_infos": [
          {
            "public_key": {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "Az2bo3z3NubEB5IPHvR8Q6Q/TRidlgD7sHOSGvl1Zaek"
            },
            "mode_info": {
              "single": {
                "mode": "SIGN_MODE_DIRECT"
              }
            },
            "sequence": "13"
          }
        ],
        "fee": {
          "amount": [
            {
              "denom": "uusdc",
              "amount": "27953"
            }
          ],
          "gas_limit": "279528",
          "payer": "",
          "granter": ""
        }
      },
      "signatures": [
        "0ADJbuqHX91ZCBC1pB6vORh7fb/JKiNfI6w+tNwBvblA/q9XTAfrpkn/92nwvEs6ia+F1vXv718EqhPzgJmRKQ=="
      ]
    },
    "timestamp": "2024-05-20T12:05:50Z",
    "events": [
      {
        "type": "coin_spent",
        "attributes": [
          {
            "key": "c3BlbmRlcg==",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "Mjc5NTN1dXNkYw==",
            "index": true
          }
        ]
      },
      {
        "type": "coin_received",
        "attributes": [
          {
            "key": "cmVjZWl2ZXI=",
            "value": "bm9ibGUxN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxjNmtnbm4=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "Mjc5NTN1dXNkYw==",
            "index": true
          }
        ]
      },
      {
        "type": "transfer",
        "attributes": [
          {
            "key": "cmVjaXBpZW50",
            "value": "bm9ibGUxN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWxjNmtnbm4=",
            "index": true
          },
          {
            "key": "c2VuZGVy",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "Mjc5NTN1dXNkYw==",
            "index": true
          }
        ]
      },
      {
        "type": "message",
        "attributes": [
          {
            "key": "c2VuZGVy",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4=",
            "index": true
          }
        ]
      },
      {
        "type": "tx",
        "attributes": [
          {
            "key": "ZmVl",
            "value": "Mjc5NTN1dXNkYw==",
            "index": true
          },
          {
            "key": "ZmVlX3BheWVy",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4=",
            "index": true
          }
        ]
      },
      {
        "type": "tx",
        "attributes": [
          {
            "key": "YWNjX3NlcQ==",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4vMTM=",
            "index": true
          }
        ]
      },
      {
        "type": "tx",
        "attributes": [
          {
            "key": "c2lnbmF0dXJl",
            "value": "MEFESmJ1cUhYOTFaQ0JDMXBCNnZPUmg3ZmIvSktpTmZJNncrdE53QnZibEEvcTlYVEFmcnBrbi85Mm53dkVzNmlhK0Yxdlh2NzE4RXFoUHpnSm1SS1E9PQ==",
            "index": true
          }
        ]
      },
      {
        "type": "message",
        "attributes": [
          {
            "key": "YWN0aW9u",
            "value": "L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==",
            "index": true
          }
        ]
      },
      {
        "type": "coin_spent",
        "attributes": [
          {
            "key": "c3BlbmRlcg==",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwMHV1c2Rj",
            "index": true
          }
        ]
      },
      {
        "type": "coin_received",
        "attributes": [
          {
            "key": "cmVjZWl2ZXI=",
            "value": "bm9ibGUxOXg0ZzNmZDg4eDZ3ZTR4amhndGVlcGdxMnV0ODc5bXQ0eHI5a2Y=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwMHV1c2Rj",
            "index": true
          }
        ]
      },
      {
        "type": "transfer",
        "attributes": [
          {
            "key": "cmVjaXBpZW50",
            "value": "bm9ibGUxOXg0ZzNmZDg4eDZ3ZTR4amhndGVlcGdxMnV0ODc5bXQ0eHI5a2Y=",
            "index": true
          },
          {
            "key": "c2VuZGVy",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwMHV1c2Rj",
            "index": true
          }
        ]
      },
      {
        "type": "message",
        "attributes": [
          {
            "key": "c2VuZGVy",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4=",
            "index": true
          }
        ]
      },
      {
        "type": "message",
        "attributes": [
          {
            "key": "bW9kdWxl",
            "value": "YmFuaw==",
            "index": true
          }
        ]
      },
      {
        "type": "message",
        "attributes": [
          {
            "key": "YWN0aW9u",
            "value": "L2NpcmNsZS5jY3RwLnYxLk1zZ0RlcG9zaXRGb3JCdXJu",
            "index": true
          }
        ]
      },
      {
        "type": "coin_spent",
        "attributes": [
          {
            "key": "c3BlbmRlcg==",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwdXVzZGM=",
            "index": true
          }
        ]
      },
      {
        "type": "coin_received",
        "attributes": [
          {
            "key": "cmVjZWl2ZXI=",
            "value": "bm9ibGUxMmwydzR1Z2Z6NG02ZGQ3M3l5c3o0Nzdqc3pxbmZ1Z2h4dmtzczU=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwdXVzZGM=",
            "index": true
          }
        ]
      },
      {
        "type": "transfer",
        "attributes": [
          {
            "key": "cmVjaXBpZW50",
            "value": "bm9ibGUxMmwydzR1Z2Z6NG02ZGQ3M3l5c3o0Nzdqc3pxbmZ1Z2h4dmtzczU=",
            "index": true
          },
          {
            "key": "c2VuZGVy",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwdXVzZGM=",
            "index": true
          }
        ]
      },
      {
        "type": "message",
        "attributes": [
          {
            "key": "c2VuZGVy",
            "value": "bm9ibGUxazc0cDBtcmRtMmE5NHU3a3FwY3JmdjVseHduZDV3aDZ1cnVxbG4=",
            "index": true
          }
        ]
      },
      {
        "type": "coin_spent",
        "attributes": [
          {
            "key": "c3BlbmRlcg==",
            "value": "bm9ibGUxMmwydzR1Z2Z6NG02ZGQ3M3l5c3o0Nzdqc3pxbmZ1Z2h4dmtzczU=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwdXVzZGM=",
            "index": true
          }
        ]
      },
      {
        "type": "coin_received",
        "attributes": [
          {
            "key": "cmVjZWl2ZXI=",
            "value": "bm9ibGUxeDc0bGhlMHBxcXY3cmNnNHBjNHN2dHhobTlobmY3OXB4cGZxZnY=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwdXVzZGM=",
            "index": true
          }
        ]
      },
      {
        "type": "transfer",
        "attributes": [
          {
            "key": "cmVjaXBpZW50",
            "value": "bm9ibGUxeDc0bGhlMHBxcXY3cmNnNHBjNHN2dHhobTlobmY3OXB4cGZxZnY=",
            "index": true
          },
          {
            "key": "c2VuZGVy",
            "value": "bm9ibGUxMmwydzR1Z2Z6NG02ZGQ3M3l5c3o0Nzdqc3pxbmZ1Z2h4dmtzczU=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwdXVzZGM=",
            "index": true
          }
        ]
      },
      {
        "type": "message",
        "attributes": [
          {
            "key": "c2VuZGVy",
            "value": "bm9ibGUxMmwydzR1Z2Z6NG02ZGQ3M3l5c3o0Nzdqc3pxbmZ1Z2h4dmtzczU=",
            "index": true
          }
        ]
      },
      {
        "type": "coin_spent",
        "attributes": [
          {
            "key": "c3BlbmRlcg==",
            "value": "bm9ibGUxeDc0bGhlMHBxcXY3cmNnNHBjNHN2dHhobTlobmY3OXB4cGZxZnY=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwdXVzZGM=",
            "index": true
          }
        ]
      },
      {
        "type": "burn",
        "attributes": [
          {
            "key": "YnVybmVy",
            "value": "bm9ibGUxeDc0bGhlMHBxcXY3cmNnNHBjNHN2dHhobTlobmY3OXB4cGZxZnY=",
            "index": true
          },
          {
            "key": "YW1vdW50",
            "value": "MTAwMDAwdXVzZGM=",
            "index": true
          }
        ]
      },
      {
        "type": "noble.fiattokenfactory.MsgBurn",
        "attributes": [
          {
            "key": "YW1vdW50",
            "value": "eyJkZW5vbSI6InV1c2RjIiwiYW1vdW50IjoiMTAwMDAwIn0=",
            "index": true
          },
          {
            "key": "ZnJvbQ==",
            "value": "Im5vYmxlMTJsMnc0dWdmejRtNmRkNzN5eXN6NDc3anN6cW5mdWdoeHZrc3M1Ig==",
            "index": true
          }
        ]
      },
      {
        "type": "circle.cctp.v1.MessageSent",
        "attributes": [
          {
            "key": "bWVzc2FnZQ==",
            "value": "IkFBQUFBQUFBQUFRQUFBQUJBQUFBQUFBQVlJZ0FBQUFBQUFBQUFBQUFBQUJYMU9yeENSVjNwcmZSSVNBcSs5S0FnVFR4RndBQUFBQUFBQUFBQUFBQUFHc2xVeTRRWU00UXpEc0ttZVZvTzVHLzNtbUNBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFTSEE1M3I3Yjh5MG1BVGV3cHZacmtKWXI3SGR5VUpFTkpUZUIzakpxY1cwQUFBQUFBQUFBQUFBQUFBQTFOMVg2VEQyT2M4cFJrTmhvbEladW05YXJ1QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVlhZ0FBQUFBQUFBQUFBQUFBQUF0Nm9YN0czYXVscnoxZ0J3TkxLZk02YmFPdm89Ig==",
            "index": true
          }
        ]
      },
      {
        "type": "circle.cctp.v1.DepositForBurn",
        "attributes": [
          {
            "key": "YW1vdW50",
            "value": "IjEwMDAwMCI=",
            "index": true
          },
          {
            "key": "YnVybl90b2tlbg==",
            "value": "IjQ4NzAzOWRlYmVkYmYzMmQyNjAxMzdiMGE2ZjY2YjkwOTYyYmVjNzc3MjUwOTEwZDI1Mzc4MWRlMzI2YTcxNmQi",
            "index": true
          },
          {
            "key": "ZGVwb3NpdG9y",
            "value": "Im5vYmxlMWs3NHAwbXJkbTJhOTR1N2txcGNyZnY1bHh3bmQ1d2g2dXJ1cWxuIg==",
            "index": true
          },
          {
            "key": "ZGVzdGluYXRpb25fY2FsbGVy",
            "value": "IiI=",
            "index": true
          },
          {
            "key": "ZGVzdGluYXRpb25fZG9tYWlu",
            "value": "MQ==",
            "index": true
          },
          {
            "key": "ZGVzdGluYXRpb25fdG9rZW5fbWVzc2VuZ2Vy",
            "value": "IkFBQUFBQUFBQUFBQUFBQUFheVZUTGhCZ3poRE1Pd3FaNVdnN2tiL2VhWUk9Ig==",
            "index": true
          },
          {
            "key": "bWludF9yZWNpcGllbnQ=",
            "value": "IkFBQUFBQUFBQUFBQUFBQUFOVGRWK2t3OWpuUEtVWkRZYUpTR2JwdldxN2c9Ig==",
            "index": true
          },
          {
            "key": "bm9uY2U=",
            "value": "IjI0NzEyIg==",
            "index": true
          }
        ]
      }
    ]
  }
}