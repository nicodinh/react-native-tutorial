https://rallycoding.herokuapp.com/api/music_albums

## Lesson 33
https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/questions/1924782

## Lesson 79 and 80 - Redux
https://stephengrider.github.io/JSPlaygrounds/

### Basic
```javascript
const reducer = () => [];
const store = Redux.createStore(reducer);

store.getState();

const action = { 
  type: 'split_string',
  payload: 'asdf'
};
```

### Handling one action
```javascript
const reducer = (state = [], action) => {
	if (action.type === 'split_string') {
  	return action.payload.split('');
  }

  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = { 
  type: 'split_string',
  payload: 'asdf'
};

store.dispatch(action);
store.getState();
```

### Handling multiples actions
```javascript
const reducer = (state = [], action) => {
	if (action.type === 'split_string1') {
  	return action.payload.split('');
  }
	if (action.type === 'split_string2') {
  	return action.payload.split('#');
  }

  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action1 = { 
  type: 'split_string1',
  payload: 'asdf'
};

const action2 = { 
  type: 'split_string2',
  payload: 'ab#cd'
};

store.dispatch(action1);
store.getState();
store.dispatch(action2);
store.getState();
```

```javascript
const reducer = (state = [], action) => {
	if (action.type === 'split_string') {
  	return action.payload.split('');
  } else if (action.type === 'add_character') {
    //state.push(action.payload);
    //return state;
    return [ ...state, action.payload ];
  }
    
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = { 
  type: 'split_string',
  payload: 'asdf'
};

store.dispatch(action);
store.getState();

const action2 = { 
  type: 'add_character',
  payload: 'a'
};
store.dispatch(action2);
store.getState();
```

## Lesson 109 - Handling form updates with Action Creators

```
User Types Something  +-------------|
        |                           |
        |                           |
      \   /                         |
       \ /                          |
        '                           |
Call Action Creator with new text   |
        |                           |
        |                           |
      \   /                         |
       \ /                          |
        '                           |
Action Creator returns an action    |
        |                           |
        |                           |
      \   /                         |
       \ /                          |
        '                           |
Action sent to all reducers     Wait for new change...    
        |                           +
        |                           |
      \   /                         |
       \ /                          |
        '                           |
Reducer calculates new app state    |
        |                           |
        |                           |
      \   /                         |
       \ /                          |
        '                           |
State sent to all components        | 
        |                           |
        |                           |
      \   /                         |
       \ /                          |
        '                           |
Components rerender with new state  |
        |                           |
        |                           |
      \   /                         |
       \ /                          |
        '                           |
Inputs value set to                 |
'this.props.email' _________________|
```


## Lesson XXX - Firebase rules

```json
{
  "rules": {
		"users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```