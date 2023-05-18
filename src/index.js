import './style.css';
import { fetchStatus } from './status.js';
import { displayItems, addNewTask } from './addNew.js';
import { editApp, clearTask } from './removeItem.js';

function main() {
  fetchStatus();
  displayItems();
  editApp();
  clearTask();
  addNewTask();
}

main();