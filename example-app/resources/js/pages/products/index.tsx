import AppLayout from '@/layouts/app-layout'
import React from 'react'

const index = ({products}) => {


  console.log(products);

  return (
    <AppLayout>
      <div>Product Page index</div>


      <table className='m-10 border rounded-md'>
        <thead className='bg-slate-100 p-2'>
          <tr className='p-5'>
              <th>#id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {products.map((product) => (
              <tr className='text-center'>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </AppLayout>
  )
}

export default index