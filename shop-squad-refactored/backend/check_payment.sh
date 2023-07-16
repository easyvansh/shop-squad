#!/bin/bash

curl -X POST -H "Content-Type: application/json" \
		-d "{\"amount\":17950}" \
    http://localhost:3000/payments/intent