async function getData() {
  const id = '%232YVVVOQOG'

  const endpoint = new URL(`https://api.clashofclans.com/v1/clans/${id}/currentwar/leaguegroup`)

  endpoint.searchParams.set('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMxOGVjOTFjLWQ1NmItNGZkMy04MTY4LThhNTg0M2I5NjIzMiIsImlhdCI6MTY2NDkxNjk2OSwic3ViIjoiZGV2ZWxvcGVyL2E1NDRhYzMwLTJhYTctNTlmMS03NjYwLWRlNGUzN2Y3NTgzYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5OS4yNy4xMjguMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.bTIl6sJ5pZ6hOUWMd_qTZfvHdtKqbKuvqxFdo_1p3rESVrS0GwwPsYO5-sLgnzPhljCqkbJAIrl4UsC_lCwI9w')

  const response = await fetch(endpoint, {
    headers: {
      'method': "GET",
      mode: 'cors',
      'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMxOGVjOTFjLWQ1NmItNGZkMy04MTY4LThhNTg0M2I5NjIzMiIsImlhdCI6MTY2NDkxNjk2OSwic3ViIjoiZGV2ZWxvcGVyL2E1NDRhYzMwLTJhYTctNTlmMS03NjYwLWRlNGUzN2Y3NTgzYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5OS4yNy4xMjguMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.bTIl6sJ5pZ6hOUWMd_qTZfvHdtKqbKuvqxFdo_1p3rESVrS0GwwPsYO5-sLgnzPhljCqkbJAIrl4UsC_lCwI9w"
    }
                               
  })
}

getData()
