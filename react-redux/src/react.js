export function createDOM(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

export function createElement(tag, props, ...children) {
  props = props || {}; // props가 null로 넘어올 경우에는 객체 반환

  // 넘어온 tag가 함수라면? 함수 반환 아니면 기존대로 반환
  // 함수는 jsx를 리턴, 호출되면 똑같이 '{ tag, props, children }' 객체가 반환

  if (typeof tag === 'function') {
    // props에 children이 넘어오면 props에다가 children이라는 키를 만들어서 넣어주기
    //
    if (children.length > 0) {
      return tag({
        ...props, // 기존 props는 그대로 전달
        children: children.length === 1 ? children[0] : children,
        // children의 length가 1이면 children의 첫번째에 있는 요소를 그대로 가져옴
        // 1이 아니면  배열로 넘겨주기
      });
    } else {
      return tag(props);
    }
  } else {
    return { tag, props, children };
  }
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}
