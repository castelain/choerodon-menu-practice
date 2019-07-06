import React, { Component } from 'react';
import { Steps } from 'choerodon-ui';
import Item from 'choerodon-ui/lib/list/Item';

const Step = Steps.Step;

class MySteps extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Steps direction={ this.props.stepsData.type } size={ this.props.stepsData.size } current={ 3 }>
                {
                    this.props.stepsData.items.map((item, index) => 
                        <Step title={ item.title } description={ item.description } key={ index }/>
                    )
                }
            </Steps>
        );
    }
}
 
export default MySteps;