# react-server-status

Based on https://github.com/gaearon/react-side-effect

## Install

`$ npm install --save react-server-status`

## Example

### React View
```javascript
import React, { Component } from 'react';

import ServerStatus from 'react-server-status';

export default class GenericView extends Component {
    render() {
        return (
            <ServerStatus status={ 500 }>
                <div>Some content</div>
            </ServerStatus>
        );
    }
}
```

### Server
```javascript
// …
import React from 'react';
import { renderToString } from 'react-dom/server';
import ServerStatus from 'server-status';
// …
const page = renderToString(<App />);
this.status = ServerStatus.rewind() || 200;
/// …
```
