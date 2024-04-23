#!/usr/bin/env node
import userName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const greeting = userName();
console.log(greeting);