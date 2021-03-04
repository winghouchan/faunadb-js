const { Client, query: q } = require('./index')

const client = new Client({
  secret: 'fnAD_mGdxyACARra7P_vdRLIJLp3_zQfde7c4_AE',
})

client
  .query(
    q.CreateFunction({
      name: 'myFunc',
      body: q.Query(q.Lambda('x', q.Var('x')), { api_version: 4 }, 1),
    })
  )
  .then(ret => console.log(ret))
  .catch(err => console.error('Error: %s', err))

// client
//   .query(q.Call('create_only_positive', -1), { queryTimeout: 200 })
//   .catch(error => {
//     console.info(error)
//   })

// client.query(
//   q.CreateFunction({
//     name: 'create_only_positive',
//     body: q.Query(
//       q.Lambda(
//         'number',
//         q.If(
//           q.GT(q.Var('number'), 0),
//           q.Create(q.Collection('numbers'), {
//             data: { number: q.Var('number') },
//           }),
//           q.Abort('Only positive number allowed')
//         )
//       )
//     ),
//   })
// )

// client.query(q.Add(q.Divide(null, 2), null)).catch(err => {
//   const errors = err.requestResult.responseContent.errors
//   console.info(err)
// })
