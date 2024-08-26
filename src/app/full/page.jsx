import Chance from '@/components/chance'
import Guarantee from '@/components/guarantee'
import Half from '@/components/half'
import Introduction from '@/components/introduction'
import List from '@/components/list'
import Tarifs from '@/components/tarifs'
import React from 'react'

const Index = () => {
    return (
        <div>
            <Half percentage={90} />
            <List />
            <Introduction />
            <Tarifs />
            <Guarantee />
            <Chance />
        </div>
    )
}

export default Index