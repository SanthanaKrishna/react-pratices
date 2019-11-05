import React from 'react'
import { UserContext, ChannelContext } from './index'

function ComponentF() {
    return (
        <div>
            Component F
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User context value {user}, channel context value {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
