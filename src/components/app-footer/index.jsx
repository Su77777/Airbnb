import React, { memo } from 'react'
import { AppFooterWrapper } from './style'
import footerData from "@/assets/data/footer.json"

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className='wrapper'>
        <ul className='list'>
          {
            footerData.map((item,index)=> {
              return (
                <li className='list-item' key={item.name}>
                  <div className='name'>
                    {item.name}
                  </div>
                  <ul >
                    {
                      item.list.map((iten,index)=>{
                        return (
                          <li className='list-iten'><span className='name-list'>{iten}</span></li>
                        )
                      })
                    }
                  </ul>
                </li>
              )
            })
          }
        </ul>
        <div className='statement'>© 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</div>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter