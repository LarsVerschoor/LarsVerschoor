async function getData() {
  const clanId = '%232YVVVOQOG'
  const endpoint = new URL(`https://api.clashofclans.com/v1/clans/${clanId}/currentwar/leaguegroup`)
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjIxYTkxMTQ2LTcyNTgtNGQ5NC05MzIzLTNiYjE5OWZhMDcyZCIsImlhdCI6MTY2NDk1ODgyMiwic3ViIjoiZGV2ZWxvcGVyL2E1NDRhYzMwLTJhYTctNTlmMS03NjYwLWRlNGUzN2Y3NTgzYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4LjIwNi43OC4xNDciXSwidHlwZSI6ImNsaWVudCJ9XX0.u4iE9UJcwkyHXKlbTLuNd2rktUh43pBjfTVq5im9xzyB3GxcKWZuHYgM2e2oVDrxqjqc2VjtZh-dvzh7Kbp8Wg'

  const response = await fetch(endpoint, {
    headers: {
      'method': "GET",
      'Authorization': token,
      mode: 'no-cors'
    }
  })
}

getData()
