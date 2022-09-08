import { gql } from '@apollo/client';

export const GET_TAILS = gql`
    query longTails($tail : bpchar!) {
        long_tails(where: {tail: {_eq: $tail}}) {
            json_id
        }
    }
`;