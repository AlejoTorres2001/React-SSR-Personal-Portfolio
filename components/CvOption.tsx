import React from 'react'
import Flag from 'react-world-flags'

const FILE_NAME = 'AlejoTorresCV.pdf'

type CvOptionProps = {
  fileUrl: string
  langOptions: { flagCode: string, flagHeight:string, langText: string }
}

const CvOption: React.FunctionComponent<CvOptionProps> = ({
  fileUrl,
  langOptions
}) => {
  return (
    <a
      href={fileUrl}
      download={FILE_NAME}
    >
      <button name='SendEmail' className="btn cv-option">
        <Flag code={langOptions.flagCode} height={langOptions.flagHeight} />
        &nbsp; {langOptions.langText}
      </button>
    </a>
  )
}

export default CvOption
