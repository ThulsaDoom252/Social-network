import React from 'react'
import loadingBar from '../components/common/loading-bar.gif'
import headerLoading from '../components/common/headerLoading.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const aboutData = 'aboutData'
export const nameData = 'nameData'
export const isLookingForAJobData = 'isLookingForAJobData'
export const lookingForAJobDataInfo = 'lookingForAJobDataInfo'
export const allData = 'allData'
export const dataUploaded = 'dataUploaded'

export const directEditModeInfo = 'In directMode all user\'s data can be changed directly on profile page'
export const showMobileLayoutInfo = 'If on - site will render in mobile mode. Always'
export const profileNotFound = 'profile not found'
export const fetchUiSpin = <p><FontAwesomeIcon icon={faSpinner} spin /></p>

export const fetchUiBar = <p><img className={'loading-bar'} src={loadingBar} alt='' /></p>
export const fetchUiHeader = <p><img className={'header-loading'} src={headerLoading} alt='loading...' /></p>
export const fetchUsers = <p><img className={'header-loading'} src={headerLoading} alt='loading...' /></p>


export const youtube = 'youtube'
export const instagram = 'instagram'
export const vk = 'vk'
export const github = 'github'
export const mainLink = 'mainLink'
export const twitter = 'twitter'
export const facebook = 'facebook'
export const website = 'website'


export const statusMaxLength = 50
export const statusErrorText = `Status length can't exceed ${statusMaxLength} characters!`