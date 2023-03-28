// import { View, Text } from 'react-native'
import React from 'react'

const Alert = (props) => {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() +lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissable fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}.
    </div>
  )
}

export default Alert