import PropTypes from 'prop-types'
import React, { memo,useState } from 'react'
import { DetailPictureWrapper } from './styled'
import IconShare from '@/assets/svg/icon_share'
import IconLove from '@/assets/svg/icon_love'
import PictureBrowse from '@/base-ui/picture-browse/PictureBrowse'

const DetailPicture = memo((props) => {
  const [isShowPictureBrowse,setisShowPictureBrowse] = useState(false)
  const { pictureUrls } = props
  return (
    <DetailPictureWrapper>
      <div className='detail-content' onClick={e => setisShowPictureBrowse(true)}>
        <div className='item left'>
          {
            pictureUrls?.slice(0,1).map(item => {
              return (
                <div className='over-box'>
                    <img className='picture' src={item} alt="" />
                </div>
              )
            })
          }
        </div>
        <div className='item right'>
        {
            pictureUrls?.slice(1,5).map(item => {
              return (
                <div className='right-item'>
                  <div className='over-box'>
                    <img className='picture' src={item} alt="" />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='share-and-collect'>
          <div className='item share'>
            <IconShare></IconShare>
            <div className='text'>分享</div>
          </div>
          <div className='item collect'>
            <IconLove></IconLove>
            <div className='text'>收藏</div>
          </div>
        </div>
        <div className='check-picture' onClick={e => setisShowPictureBrowse(true)}>
          查看照片
        </div>
      </div>
      {isShowPictureBrowse && <PictureBrowse pictureUrls={pictureUrls} closeClick={e => setisShowPictureBrowse(false)}></PictureBrowse>}
    </DetailPictureWrapper>
  )
})

DetailPicture.propTypes = {
  pictureUrls:PropTypes.array
}

export default DetailPicture