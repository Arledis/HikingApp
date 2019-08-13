import React from 'react'

const ProgressBar = ({progress, total}) => {

  const progressPercentage = () => parseInt((progress / total) * 100)

  const progressContainer = {
    width: "25vw",
    height: "5vh",
    borderRadius: "50px",
    backgroundColor: 'white',
    display: "flex",
    alignItems: "center"
  }

  const progressBar = {
    width: `${progressPercentage()}%`,
    backgroundColor: "green",
    height: "5vh",
    borderRadius: "50px 0px 0px 50px"
  }

  return(
    <>
      <div style={progressContainer}>
        <div style={progressBar}></div>
      </div>
    <h2>{progressPercentage()}%</h2>
    </>
  )
}

export default ProgressBar;
