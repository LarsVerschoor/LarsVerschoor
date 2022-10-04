async function getData() {
  const id = '%232YVVVOQOG'

  const endpoint = new URL(`https://api.clashofclans.com/v1/clans/${id}/currentwar/leaguegroup`)

  endpoint.searchParams.set('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJlOTIxNzQ0LWRhNWItNDIwNC1hZTdmLWQwZmUxMDc3YTU3MSIsImlhdCI6MTY2NDg5MDY1Nywic3ViIjoiZGV2ZWxvcGVyL2E1NDRhYzMwLTJhYTctNTlmMS03NjYwLWRlNGUzN2Y3NTgzYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEuMS4xLjEiXSwidHlwZSI6ImNsaWVudCJ9XX0.xSFPGFjI95UgsiGfyh-rrKhu1kPBPqvci4fmbz6v8oh_GNTF_y39q8u2s4LunZkLqlPpLNm-p85eDkPpoM9r7g')

  console.log(endpoint.toString())

  const response = await fetch(endpoint)

  console.log(response.json())
}

getData()
