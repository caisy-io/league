/**
 * Copyright (c) 2020, Amdocs Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 import React from 'react';

 export default React.createContext({
     /**
      * Specifies the Stackable's depth.
      * Each nested Stackable receive a depth higher than its parent by 1
      */
     depth: 0,
 
     /**
      * Specifies the list of ancestor classNames of the wrapping Stackables. This is used for passing ancestors
      * across Stackables so that nested Stackables have to complete list of ancestors.
      */
     ancestors: '',
    /**
      * Specifies the list of ancestor classNames of the wrapping Stackables. This is used for passing ancestors
      * across Stackables so that nested Stackables have to complete list of ancestors.
      */
     zIndex: 1100,
 });