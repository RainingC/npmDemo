import React, { Fragment } from 'react'
import { Button, message } from "antd";
import moment from "moment";


function CheckTime() {
  const showTime = () => {
    message.info(`当前时间为${moment().format('YYYY-MM-DD hh-mm-ss')}`)
  };

  return (
      <Fragment>
        <Button onClick={() => showTime}>查看当前时间</Button>
      </Fragment>
  )
}

export default CheckTime