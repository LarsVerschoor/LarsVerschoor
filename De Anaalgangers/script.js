async function getData() {
  const id = '%232YVVVOQOG'

  const endpoint = new URL(`https://api.clashofclans.com/v1/clans/${id}/currentwar/leaguegroup`)

  endpoint.searchParams.set('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIwNTUxM2M0LTMwYzMtNGZkNy04YjEzLTJkOTYzYzMxMTJmYiIsImlhdCI6MTY2NDg5MDM4OCwic3ViIjoiZGV2ZWxvcGVyL2E1NDRhYzMwLTJhYTctNTlmMS03NjYwLWRlNGUzN2Y3NTgzYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjg2LjgzLjQ4LjExNiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.qHfdfo1nb1u-nTPAPYVDSe2QKT1cIMHEBztwif4QgVt4-dPWXHY0l2JNp2YMuIDoOD3O65ewCxZ_IKO78N2_AA')

  console.log(endpoint.toString())

  const response = await fetch(endpoint)

  console.log(response.json())
}

getData()
