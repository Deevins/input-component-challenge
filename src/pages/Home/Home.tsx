import React from 'react'

import Title from 'components/home/Title'
import InputContainer from 'components/home/InputContainer/InputContainer'

const Home: React.FC = () => {
    return (
        <>
            <Title title={'Inputs'} />
            <InputContainer />
        </>
    )
}

export default Home
