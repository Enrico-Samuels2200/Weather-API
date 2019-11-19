import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test.todo('It executed.'), got => {
  function callBack(get){
    expect(data).toBe()
    done();
  }
  callBack()
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div)
};

test("It successfully got the data.", () => {
  const component = renderer.create()
  let app = component.toJSON;
  expect(app).toMatchSnapshot();
})