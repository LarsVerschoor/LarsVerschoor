async function getData() {
  const clanId = '%232YVVVOQOG'
  const endpoint = new URL(`https://api.clashofclans.com/v1/clans/${clanId}/currentwar/leaguegroup`)
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImU2ZThlMDkxLTE0ZjAtNDViNC1hNjNkLTU5NzQ3ODhiODJhYSIsImlhdCI6MTY2NDk1ODQ2MCwic3ViIjoiZGV2ZWxvcGVyL2E1NDRhYzMwLTJhYTctNTlmMS03NjYwLWRlNGUzN2Y3NTgzYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMy4yMS4yNDQuMCIsIjEwMy4yMi4yMDAuMCIsIjEwMy4zMS40LjAiLCIxMDQuMTYuMC4wIiwiMTA0LjI0LjAuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.2NF5CK7_ifZqWFIGMac6lNI2rxNnWudxkvqVVp097piu7g58ihObIQ5OeEOPOQr4t8x_EljHv5vl7_EPaVjWdg'

  const response = await fetch(endpoint, {
    headers: {
      'method': "GET",
      'Authorization': token
    }
  })
}

getData()
