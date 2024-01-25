import React from 'react'
import MastersForm from './mastersForm/MastersForm'
import ApiMasterForm from './apiMasterForm/ApiMasterForm'
import SettingMaster from './settingsForm/SettingMaster'
import WebsiteMaster from './websiteMaster/WebsiteMaster'
import Members from './members/Members'
import Reports from './reports/Reports'
import Payment from './payment/Payment'

function Master() {
  return (
    <section>
      <div className='container'>
        <MastersForm/>
        <ApiMasterForm/>
        <SettingMaster/>
        <WebsiteMaster/>
        <Members/>
        <Reports/>
        <Payment/>
      </div>
    </section>
  )
}

export default Master
