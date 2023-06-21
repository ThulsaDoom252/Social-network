import React from 'react'
import { aboutData, fetchUiSpin, lookingForAJobDataInfo } from '../../../common/commonData'

const ProfileData = ({ isCurrentUser, profileDataProps }) => {
     const [handleChange, values, errors, toggleProfileEditMode,
          descriptionEditMode, setDescriptionEditMode, centerProfileAboutEditMode, setCenterProfileAboutEditMode,
          directEditFunc, jobDescriptionStyle, pointerCursor,
          aboutBlockStyle, isLookingForAJobDataFetch, isLookingForAJobDataUploadStatus, jobDescriptionDataFetch, jobDescriptionDataUploadStatus,
          handleChangeIsLookingForAJobInfo, showMobileVersion, aboutDataUploadStatus
     ] = profileDataProps

     //About block render depends on showMobileVersion state

     return (
          <div>
               <div style={pointerCursor}
                    className={`profile-data-block ${isLookingForAJobDataUploadStatus && 'profile-data-block-uploaded'}`}
                    onClick={() => directEditFunc && handleChangeIsLookingForAJobInfo(!values.lookingForAJob)}>
                    {isLookingForAJobDataFetch ? fetchUiSpin : values.lookingForAJob && isCurrentUser ? 'You are looking for a job' : values.lookingForAJob && !isCurrentUser ? 'Looking for a job' : 'Not looking for a job'}
               </div>
               <div
                    style={jobDescriptionStyle}
                    className={`profile-data-block ${jobDescriptionDataUploadStatus && 'profile-data-block-uploaded'}`}>
                    {descriptionEditMode ?
                         <input id={'applicantDescription'} className={'job-description-input'}
                                onChange={handleChange}
                                onBlur={() => toggleProfileEditMode(descriptionEditMode, setDescriptionEditMode, lookingForAJobDataInfo)}
                                autoFocus={true}
                                type='text' value={values.applicantDescription} /> :
                         <p style={pointerCursor} className={'job-description'}
                            onClick={() => toggleProfileEditMode(descriptionEditMode, setDescriptionEditMode)}>{jobDescriptionDataFetch ? fetchUiSpin : values.applicantDescription ? values.applicantDescription : 'No info about job/skills'}</p>}
               </div>
               {errors.applicantDescription &&
                    <p className={'profile-page-input-error'}>{errors.applicantDescription}</p>}

               {showMobileVersion && <div style={aboutBlockStyle}
                                          className={`profile-data-block-about ${aboutDataUploadStatus && 'profile-data-block-uploaded'}`}>
                    {centerProfileAboutEditMode ?
                         <input id={'about'} className={'job-description-input'} onChange={handleChange}
                                onBlur={() => toggleProfileEditMode(centerProfileAboutEditMode, setCenterProfileAboutEditMode, aboutData)}
                                autoFocus={true}
                                type='text' value={values.about} /> :
                         <p style={pointerCursor} className={'job-description'}
                            onClick={() => toggleProfileEditMode(centerProfileAboutEditMode, setCenterProfileAboutEditMode)}>{values.about ? values.about : 'No info'}</p>}</div>}

               {errors.about && <p className={'profile-page-input-error'}>{errors.about}</p>}
          </div>
     )
}

export default ProfileData


















