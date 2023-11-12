// functions/index.ts

import * as functions from 'firebase-functions';
import app from './index'

export const api = functions.https.onRequest(app);
