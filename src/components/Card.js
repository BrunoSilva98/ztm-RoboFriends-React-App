import React, {Fragment} from 'react';

const Card = ({name, email, id}) => {
    return(
        <Fragment>
            <main className='bg-light-green dib br3 pa3 na2 grow bw2 shadow-5 tc'>
                <img alt='robots' height="200" width="200" src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </main>
        </Fragment>
    )
}

export default Card;