import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import React from 'react'
import { hasuraData } from '../_data/data';
import { GET_TAILS } from '../resolver/resolver';

const Tail = () => {
  const router = useRouter();
  
  const { data} = useQuery(GET_TAILS, {
    variables:{
      tail:router.query.tail
    }
  });
  
  const tailData = hasuraData.find(item => item.id === +data?.long_tails[0]["json_id"]);

return (
    <div>
      {tailData &&
        <>
          <h1>{tailData.title}</h1>
          <h3>{tailData.description}</h3>
        </>
      }
    </div>
  );
};

export default Tail;
