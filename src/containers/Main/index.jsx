import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import { CointainerStyled } from './style'

function Main() {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleString()

    const handleChange =( {target} ) => {
        const country = target.value
        setCountry(country)
    }

    const getCovidData = useCallback(country => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return (
        <CointainerStyled>
            <div className='mb-2'>
                <Panel
                data={data}
                updateAt={updateAt}
                onChange={handleChange}
                country={country}
                getCovidData={getCovidData}
                />
            </div>
            <Board data={data} />

        </CointainerStyled>
    )
}

export default memo(Main) 
