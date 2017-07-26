import Mock from 'mockjs';


const List = [];
const count = 20;


for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    taskId: '@id',
    taskName: '@ctitle(10, 20)'
  }));
}

export default {
    getList: () => List
}