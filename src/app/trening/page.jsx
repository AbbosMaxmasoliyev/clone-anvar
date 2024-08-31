"use client"
import React, { useEffect, useState } from 'react'
import Chance from '../../components/chance'
import Guarantee from '../../components/guarantee'
import Half from '../../components/half'
import Introduction from '../../components/introduction'
import List from '../../components/list'
import Popup from '../../components/popup'
import Tarifs from '../../components/tarifs'
import CountdownTimer from '../../components/timer'
import DreamCrusher from '../../components/dreamCrusher'
import Problem from '../../components/problem'
import Attract from '../../components/attract'
import HeroTraining from '../../components/heroTraining'

const Training = () => {
  const [open, setOpen] = useState(false)
  const [tarif, setTarif] = useState("")

  const onSubmit = (tarif) => {
    setTarif(tarif)
    setOpen(true)
  }
  useEffect(() => {
    return () => {
      setTarif("")
    }
  }, [])

  return (
    <div>
      <HeroTraining />
      <Attract />
      <Problem />
      <DreamCrusher />
      <List />
      <Introduction />
      <Tarifs submit={(e) => onSubmit(e)} />
      <Guarantee />
      <Popup isOpen={open} onClose={() => setOpen(false)} tarif={tarif} />
    </div>
  )
}

export default Training