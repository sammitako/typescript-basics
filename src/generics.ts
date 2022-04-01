// 함수
function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });
console.log(merged); // { foo: 1, bar: 2, foobar: 3 }

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(5);

// 인터페이스
interface Items<T> {
  list: T[];
}

const items: Items<number> = {
  list: [1, 2, 3],
};

// Type Alias
type Lists<T, V> = {
  list: T[];
  value: V;
};

const lists: Lists<number, string> = {
  list: [1, 2, 3],
  value: "string",
};

// 클래스
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

// 먼저 등록된거부터 빠진다.
while (queue.length > 0) {
  console.log(queue.dequeue());
}
