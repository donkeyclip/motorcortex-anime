/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "2048fd9d53f38571eee5";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(3)(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?h(t):e}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=l(t);if(e){var r=l(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return d(this,n)}}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}function m(t,e,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=f(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function v(t,e,n,i){return(v="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,i){var r,s=f(t,e);if(s){if((r=Object.getOwnPropertyDescriptor(s,e)).set)return r.set.call(i,n),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(i,e)){if(!r.writable)return!1;r.value=n,Object.defineProperty(i,e,r)}else o(i,e,n);return!0})(t,e,n,i)}function g(t,e,n,i,r){if(!v(t,e,n,i||t)&&r)throw new Error("failed to set property");return n}function y(t,e){return b(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var i,r,s=[],a=!0,o=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(s.push(i.value),!e||s.length!==e);a=!0);}catch(t){o=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(o)throw r}}return s}(t,e)||C(t,e)||w()}function k(t){return function(t){if(Array.isArray(t))return I(t)}(t)||x(t)||C(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t){if(Array.isArray(t))return t}function x(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function C(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=C(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){o=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw s}}}}function A(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function P(t,e,n,i){var r=O();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var a=e((function(t){r.initializeInstanceElements(t,o.elements)}),n),o=r.decorateClass(function(t){for(var e=[],n=function(t){return"method"===t.kind&&t.key===s.key&&t.placement===s.placement},i=0;i<t.length;i++){var r,s=t[i];if("method"===s.kind&&(r=e.find(n)))if(D(s.descriptor)||D(r.descriptor)){if(_(s)||_(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(_(s)){if(_(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}T(s,r)}else e.push(s)}return e}(a.d.map(S)),t);return r.initializeClassElements(a.F,o.elements),r.runClassFinishers(a.F,o.finishers)}function O(){O=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(n){e.forEach((function(e){e.kind===n&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var n=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var r=e.placement;if(e.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?t:n;this.defineClassElement(s,e)}}),this)}),this)},defineClassElement:function(t,e){var n=e.descriptor;if("field"===e.kind){var i=e.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,n)},decorateClass:function(t,e){var n=[],i=[],r={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,r)}),this),t.forEach((function(t){if(!_(t))return n.push(t);var e=this.decorateElement(t,r);n.push(e.element),n.push.apply(n,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:n,finishers:i};var s=this.decorateConstructor(n,e);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(t,e,n){var i=e[t.placement];if(!n&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var n=[],i=[],r=t.decorators,s=r.length-1;s>=0;s--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var o=this.fromElementDescriptor(t),u=this.toElementFinisherExtras((0,r[s])(o)||o);t=u.element,this.addElementPlacement(t,e),u.finisher&&i.push(u.finisher);var l=u.extras;if(l){for(var c=0;c<l.length;c++)this.addElementPlacement(l[c],e);n.push.apply(n,l)}}return{element:t,finishers:i,extras:n}},decorateConstructor:function(t,e){for(var n=[],i=e.length-1;i>=0;i--){var r=this.fromClassDescriptor(t),s=this.toClassDescriptor((0,e[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){t=s.elements;for(var a=0;a<t.length-1;a++)for(var o=a+1;o<t.length;o++)if(t[a].key===t[o].key&&t[a].placement===t[o].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:n}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,b(e)||x(e)||C(e)||w()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var n=A(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var s={kind:e,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=t.initializer),s},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:M(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var n=M(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:n}},runClassFinishers:function(t,e){for(var n=0;n<e.length;n++){var i=(0,e[n])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,n){if(void 0!==t[e])throw new TypeError(n+" can't have a ."+e+" property.")}};return t}function S(t){var e,n=A(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:n,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function T(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function _(t){return t.decorators&&t.decorators.length}function D(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function M(t,e){var n=t[e];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+e+"' to be a function");return n}var V,$=[{key:"info",style:"color: #666;",level:5,consoleMethod:"log"},{key:"notice",style:"background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",level:4,consoleMethod:"log"},{key:"warning",style:"color: black; background: orange;",level:2,consoleMethod:"warn"},{key:"error",style:"color: black; background: red;",level:1,consoleMethod:"error"}],j="data-motorcortex2-id",N="closed",B="MotorCortex",R={staggerPreface:"@stagger",mathExpPreface:"@expression",attibuteValue:"@attribute",patternValue:"@pattern",dynamicDuration:"dynamic",totalElements:"total",elementIndex:"index",initParams:"initParams"};(V=window).AudioContext||(V.AudioContext=window.webkitAudioContext);var L=new window.AudioContext;function F(t){return!isNaN(parseFloat(t))&&isFinite(t)}function z(t){return"string"==typeof t||t instanceof String}function G(t){return"object"===i(t)}function q(t){return t&&"[object Function]"==={}.toString.call(t)}function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return!(null===e||!G(t))&&Object.prototype.hasOwnProperty.call(t,e)}function J(t){return t.charAt(0).toUpperCase()+t.slice(1)}var W=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");function H(t,e){var n=null==t?void 0:t[e];if(!z(n))return null;var i=n.match(W)[0],r=n.substring(i.length);return!function(t){return"number"==typeof t&&isFinite(t)}(i=Number(i))||"%"!==r&&"px"!==r?null:{number:i,unit:r}}var U=['originalDims should be an object containing both the "width" and "height" keys'];function Z(t){return null==t?{result:!0,analysis:{width:null,height:null}}:G(t)&&K(t,"width")&&K(t,"height")?null==H(t,"width")?{result:!1,errors:["originalDims.width should be defined either on px or %."]}:null==H(t,"height")?{result:!1,errors:["originalDims.height should be defined either on px or %."]}:{result:!0,analysis:Q(t)}:{result:!1,errors:U}}function Q(t){return G(t)&&null!=t?{width:H(t,"width"),height:H(t,"height")}:{width:null,height:null}}function X(t){var e=t.replace(/ /g,"");return/.*\((.*)\).*/.exec(e)[1].split(",")}function Y(t,e){return Math.round(t/e)*e}function tt(t){var e=t.split("___");return{mcid:e[0],attribute:e[1]}}function et(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function nt(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?"_":"-";return"".concat(et()).concat(et()).concat(e).concat(et()).concat(e).concat(et())}function it(t,e){return"".concat(t).concat("___").concat(e)}function rt(){return!1}function st(t,e,n){for(var i=e.split("."),r=t,s=0;s<i.length-1;s++){if(!K(r,i[s]))return!1;r=r[i[s]]}return!!K(r,i[i.length-1])&&(r[i[i.length-1]]=n,!0)}var at=new function t(e){r(this,t);var n=2..logLevel;K(e,"logLevel")&&(n=e.logLevel);for(var i=0;i<$.length;i++){var s=$[i];n>=s.level?this[s.key]=window.console[s.consoleMethod].bind(window.console,"MotorCortex - ".concat(s.key,": ")):this[s.key]=function(){}}this.log=n>=3?window.console.log.bind(window.console,"MotorCortex - "):function(){}};function ot(t,e,n){var i=e(t);if(i.length>0){for(var r="Error on plugin's \"".concat(n.plugin_npm_name,'" "').concat(n.ClassName,'" instantiation. Errors (op props):'),s=0;s<i.length;s++)r+="\n - ".concat(i[s].message,". ").concat(i[s].actual," provided");return at.error(r),{result:!1,errors:i}}return{result:!0}}function ut(t,e,n){for(var i=[],r=0;r<t.length;r++){var s=t[r],a=s.parentMillisecond-n;a=a*e+n,1!==e&&i.push({id:s.incident.id,start:a,end:a+s.incident.duration*e,startDelta:a-s.millisecond})}return i}function lt(t){return t.result?{result:!0,execute:t.execute}:{result:!1,errors:t.errors}}var ct=function(){function t(e){r(this,t),this.runTimeInfo=e.runTimeInfo,this.context=e.context,this.onInitialise(),this.getIncidentById=e.getIncidentById}return a(t,[{key:"onInitialise",value:function(){}},{key:"_resize",value:function(){at.log("Please overwite the _resize method of the Channel")}},{key:"addIncidents",value:function(t){return lt(this.checkAddition(t))}},{key:"editIncidents",value:function(t,e){return lt(this.checkEdit(t,e))}},{key:"removeIncidents",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return lt(this.checkDelete(t,e))}},{key:"recalcScratchValues",value:function(t){}},{key:"checkAddition",value:function(t){return{result:!0,execute:function(){}}}},{key:"checkEdit",value:function(t,e){return{result:!0,execute:function(){}}}},{key:"checkDelete",value:function(t){return{result:!0,execute:function(){}}}},{key:"checkResizedIncidents",value:function(t){return{result:!0,execute:function(){}}}},{key:"moveTo",value:function(t,e,n){}}],[{key:"type",get:function(){return"plain"}}]),t}(),ht="up",dt="down",pt="native.tree.bypass",ft=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.parentNode=null,this.isNode=!1,K(e,"id")?this.id=e.id:this.id=nt(),this.props=e}return a(t,[{key:"name",get:function(){return K(this.props,"name")?this.props.name:null},set:function(t){this.props.name=t}},{key:"delay",get:function(){return K(this.props,"delay")?this.props.delay:0},set:function(t){0!==t&&(this.props.delay=t)}},{key:"hiatus",get:function(){return K(this.props,"hiatus")?this.props.hiatus:0},set:function(t){0!==t&&(this.props.hiatus=t)}},{key:"repeats",get:function(){return K(this.props,"repeats")?this.props.repeats:1},set:function(t){this.props.repeats=t}},{key:"duration",get:function(){return this.repeats*(this.delay+this.props.duration+this.hiatus)},set:function(t){var e=t/this.duration;this.props.duration*=e,this.hiatus*=e,this.delay*=e}},{key:"setNewDuration",value:function(t){this.duration=t,this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:ht})}},{key:"systoleDiastole",value:function(t){this.duration*=t}},{key:"hasParent",get:function(){return null!==this.parentNode}},{key:"attachToNode",value:function(t){this.parentNode=t}},{key:"detachFromParent",value:function(){this.parentNode=null}},{key:"putMessageOnPipe",value:function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(K(r,"direction")||(r.direction=dt),r.direction!==dt||K(r,"positionDelta")||(r.positionDelta=0),r.selfExecute){var s="handle".concat(J(t)),a="function"==typeof this[s];if(a){var o=this[s](i,e);if(o!==pt){var u={response:o,responder:this};return r.direction===ht?u:[n(n({},u),{},{positionDelta:r.positionDelta})]}}}return r.direction===ht?this.hasParent?this.parentNode.putMessageOnPipe(t,e,i,{selfExecute:!0,direction:ht}):{response:!1,responder:null}:[]}},{key:"bypass",value:function(){return pt}},{key:"positionOnPyramidion",get:function(){return this.getPositionOnPyramidion()}},{key:"getPositionOnPyramidion",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.hasParent){var e=this.putMessageOnPipe("getPositionOnPyramidion",{delta:t,id:this.id},"Parent",{selfExecute:!1,direction:ht});return e.response}return t}}]),t}(),mt="Leaf has already been attached to another Node",vt="Negative positioning of childs on nodes is not allowed",gt="The Leaf with the requested id couldn't be found on the Tree",yt=function(t){u(i,t);var e=p(i);function i(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(this,i),(t=e.call(this,n)).isNode=!0,t.children={},t.calculatedDuration=0,t}return a(i,[{key:"duration",get:function(){return this.repeats*(this.delay+this.calculatedDuration+this.hiatus)},set:function(t){if(0!==this.duration){var e=t/this.duration;for(var n in this.calculatedDuration*=e,this.hiatus*=e,this.delay*=e,this.children){var i=this.children[n];this.editPosition(i.id,i.position*e,!0),i.leaf.systoleDiastole(e)}}}},{key:"_calculateDuration",value:function(){var t=0;for(var e in this.children){var n=this.children[e];n.position+n.leaf.duration>t&&(t=n.position+n.leaf.duration)}return t!==this.calculatedDuration&&(this.calculatedDuration=t,!0)}},{key:"handleRecalcDuration",value:function(t,e){return!this._calculateDuration()||this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:ht})}},{key:"getLeafById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(K(this.children,t))return this.children[t].leaf;if(e)return null;for(var n in this.children){var i=this.children[n].leaf;if(i.isNode){var r=i.getLeafById(t);if(null!=r)return r}}return null}},{key:"getLeafPosition",value:function(t){if(K(this.children,t))return this.children[t].position;var e=this.putMessageOnPipe("getLeafPosition",{id:t},"Groups",{selfExecute:!1,direction:dt});return e.length>0?e[0].positionDelta+e[0].response:void 0}},{key:"handleGetLeafPosition",value:function(t,e){return this.getLeafPosition(e.id)}},{key:"checkAddition",value:function(t,e){return t.hasParent?{result:!1,reason:mt}:e<0?{result:!1,reason:vt}:{result:!0}}},{key:"addChild",value:function(t,e){return t.hasParent?{result:!1,reason:mt}:(this.children[t.id]={id:t.id,leaf:t,position:e},t.attachToNode(this),this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht}),{result:!0})}},{key:"checkRemoveChild",value:function(t){return K(this.children,t)?{result:!0}:{result:!1,reason:gt}}},{key:"removeChild",value:function(t){return this.children[t].leaf.detachFromParent(),delete this.children[t],this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht}),{result:!0}}},{key:"checkEditPosition",value:function(t,e){return e<0?{result:!1,reason:vt}:K(this.children,t)?{result:!0}:{result:!1,reason:gt}}},{key:"editPosition",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(K(this.children,t))return this.children[t].position=e,n||this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht}),{result:!0}}},{key:"putMessageOnPipe",value:function(t,e,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(K(s,"direction")||(s.direction=dt),s.direction!==dt||K(s,"positionDelta")||(s.positionDelta=0),s.direction===ht)return m(l(i.prototype),"putMessageOnPipe",this).call(this,t,e,r,s);var a=m(l(i.prototype),"putMessageOnPipe",this).call(this,t,e,r,s);if(a.length>0)return a;for(var o in this.children){var u=this.children[o].leaf,c=n(n({},s),{},{selfExecute:!0,positionDelta:s.positionDelta+this.children[o].position});a.push.apply(a,k(u.putMessageOnPipe(t,e,r,c)))}return a}},{key:"handleGetPositionOnPyramidion",value:function(t,e){var n=e.delta+this.getLeafPosition(e.id);return this.getPositionOnPyramidion(n)}}]),i}(ft);function kt(t){t.descriptor.value=function(t){void 0===this.blockID&&(this.blockID=nt()),this.DescriptiveIncident.putMessageOnPipe("setBlock",{id:this.blockID,description:t,incidentId:this.DescriptiveIncident.id,realIncidentId:this.id},"rootClip",{selfExecute:!0,direction:ht})}}function bt(t){t.descriptor.value=function(){this.DescriptiveIncident.putMessageOnPipe("unBlock",{id:this.blockID},"rootClip",{selfExecute:!0,direction:ht})}}var xt=P(null,(function(t,e){var n=function(e){u(i,e);var n=p(i);function i(e,s){var a;return r(this,i),a=n.call(this,s),t(h(a)),a.mc_plugin_npm_name="motor-cortex-js",a.plugin_channel_class=ct,a.hasIncidents=!0,a.onGroupInitialise(),a.calculatedDuration=0,a}return i}(e);return{F:n,d:[{kind:"method",key:"onGroupInitialise",value:function(){}},{kind:"method",key:"handleAddIncident",value:function(t,e){if(this.id===t){var n=(0,e.incidentFromDescription)(e.incident,e.contextData,e.audio);return null===n?this.bypass():n}return this.bypass()}},{kind:"method",key:"handleMoveIncident",value:function(t,e){if(this.id===t){var n=this.getLeafById(e.incidentId,!0);return null===n?this.bypass():n}return this.bypass()}},{kind:"field",key:"handleRemoveIncident",value:function(){return this.handleMoveIncident}},{kind:"method",key:"handleResize",value:function(t){return this.id===t?this:this.bypass()}},{kind:"method",key:"removeChild",value:function(t){this.children[t].leaf.lastWish(),m(l(n.prototype),"removeChild",this).call(this,t)}},{kind:"method",key:"getIncidentsByChannel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};for(var i in n["motor-cortex-js"]=[{millisecond:t,parentMillisecond:e,incident:this,id:this.id}],this.children){var r=this.children[i],s=r.leaf.getIncidentsByChannel(t+r.position,t);for(var a in s)K(n,a)?n[a]=n[a].concat(s[a]):n[a]=s[a]}return n}},{kind:"method",key:"lastWish",value:function(){for(var t in this.children)this.children[t].leaf.lastWish()}},{kind:"method",decorators:[kt],key:"setBlock",value:function(){}},{kind:"method",decorators:[bt],key:"unblock",value:function(){}}]}}),yt),Ct=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"onInitialise",value:function(){this.incidents=[],this.incidentsById={}}},{key:"_incidentById",value:function(t){return this.incidentsById[t]}},{key:"_resize",value:function(t){for(var e=0;e<this.incidents.length;e++)this.incidents[e].millisecond*=t}},{key:"checkAddition",value:function(t){for(var e=[],n={},i=[],r=0;r<t.length;r++)n[t[r].id]=t[r].incident,i.push({id:t[r].id,millisecond:t[r].millisecond}),K(this.incidentsById,t[r].id)&&(at.error("Incident with the id ".concat(t[r].id," already exists. Addition is rejected.")),e.push({type:"Already existing id",meta:{id:t[r].id}}));if(e.length>0)return{result:!1,errors:e};var s=this;return{result:!0,execute:function(){var e;s.incidentsById=Object.assign(s.incidentsById,n),(e=s.incidents).push.apply(e,i),s.incidents.sort((function(t,e){return t.millisecond-e.millisecond}));for(var r=0;r<t.length;r++)s._incidentById(t[r].id)._onGetContextOnce(s.context)}}}},{key:"checkEdit",value:function(t,e){var n=this.incidents;return{result:!0,execute:function(){for(var i,r=0;r<t.length;r++){i=t[r].id;for(var s=0;s<n.length;s++)if(n[s].id===i){n[s].millisecond+=e;break}}n.sort((function(t,e){return t.millisecond-e.millisecond}))}}}},{key:"checkDelete",value:function(t){for(var e=this,n=[],i=0;i<t.length;i++)n.push(t[i].id);return{result:!0,execute:function(){var t=e.incidents.filter((function(t){return!n.includes(t.id)}));e.incidents=t;for(var i=0;i<n.length;i++)delete e.incidentsById[n[i]]}}}},{key:"checkResizedIncidents",value:function(t){var e=this.incidents;return{result:!0,execute:function(){for(var n,i=0;i<t.length;i++){n=t[i].id;for(var r=0;r<e.length;r++)if(e[r].id===n){e[r].millisecond+=t[i].startDelta;break}}e.sort((function(t,e){return t.millisecond-e.millisecond}))}}}},{key:"moveTo",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(i)for(var r=0;r<this.incidents.length;r++){var s=this.incidents[r],a=this._incidentById(s.id);e<s.millisecond?a.onProgress(0,0,n,!0):e>s.millisecond+a.duration?a.onProgress(1,a.duration,n,!0):a.onProgress((e-s.millisecond)/a.duration,e-s.millisecond,n,!0)}else{var o,u=this;o=e>t?this.incidents.filter((function(n){return n.millisecond+u._incidentById(n.id).duration>=t&&n.millisecond+u._incidentById(n.id).duration<=e||u._incidentById(n.id).duration+n.millisecond>=e&&n.millisecond<=e})):this.incidents.filter((function(n){return n.millisecond+u._incidentById(n.id).duration>=e&&n.millisecond+u._incidentById(n.id).duration<=t||u._incidentById(n.id).duration+n.millisecond>=t&&n.millisecond<=t}));for(var l=0;l<o.length;l++){var c=o[l],h=this._incidentById(c.id),d=(e-c.millisecond)/h.duration>=1,p=d?1:(e-c.millisecond)/h.duration,f=d?h.duration:e-c.millisecond;h.onProgress(p,f,n,!1)}}}}]),n}(ct);function It(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var wt=.1,Et="function"==typeof Float32Array;function At(t,e){return 1-3*e+3*t}function Pt(t,e){return 3*e-6*t}function Ot(t){return 3*t}function St(t,e,n){return((At(e,n)*t+Pt(e,n))*t+Ot(e))*t}function Tt(t,e,n){return 3*At(e,n)*t*t+2*Pt(e,n)*t+Ot(e)}function _t(t){return t}var Dt=function(t,e,n,i){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&n===i)return _t;for(var r=Et?new Float32Array(11):new Array(11),s=0;s<11;++s)r[s]=St(s*wt,t,n);function a(e){for(var i=0,s=1;10!==s&&r[s]<=e;++s)i+=wt;--s;var a=i+(e-r[s])/(r[s+1]-r[s])*wt,o=Tt(a,t,n);return o>=.001?function(t,e,n,i){for(var r=0;r<4;++r){var s=Tt(e,n,i);if(0===s)return e;e-=(St(e,n,i)-t)/s}return e}(e,a,t,n):0===o?a:function(t,e,n,i,r){var s,a,o=0;do{(s=St(a=e+(n-e)/2,i,r)-t)>0?n=a:e=a}while(Math.abs(s)>1e-7&&++o<10);return a}(e,i,i+wt,t,n)}return function(t){return 0===t?0:1===t?1:St(a(t),e,i)}};function Mt(t){t.descriptor.value=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};return n[this.mc_plugin_npm_name]=[{millisecond:t,parentMillisecond:e,incident:this,id:this.id}],n}}var Vt=P(null,(function(t){return{F:function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0;r(this,e),t(this),this.attrs=n,this.props=i,this.dna=s,this.context=s.context,this.mcid=s.mcid,this.id=i.id||nt(),this.modelId=i.modelId,this.gotContext=!1,this.plugin_channel_class=ct,this.mc_plugin_npm_name="motor-cortex-js",K(i,"plugin_channel_class")&&(this.plugin_channel_class=i.plugin_channel_class),K(i,"mc_plugin_npm_name")&&(this.mc_plugin_npm_name=i.mc_plugin_npm_name),this.hasIncidents=!1,this.initialValues={},this.userDefinedInitialValues=n.initialValues||{},this.pureInitialValues=null,this.autoGenerated=!1,this.onInitialise()},d:[{kind:"get",key:"selector",value:function(){return this.props.selector}},{kind:"get",key:"animAttributes",value:function(){return this.attrs.animatedAttrs}},{kind:"set",key:"animAttributes",value:function(t){this.attrs.animatedAttrs[this.attributeKey]=t}},{kind:"method",key:"getScratchValue",value:function(){return 0}},{kind:"get",key:"element",value:function(){return null===this.context?[]:this.context.getElementByMCID?this.context.getElementByMCID(this.mcid):this.context.getElements(this.selector)[0]}},{kind:"get",key:"attributeKey",value:function(){return Object.keys(this.attrs.animatedAttrs)[0]}},{kind:"get",key:"targetValue",value:function(){return this.animAttributes[this.attributeKey]}},{kind:"method",key:"getElementAttribute",value:function(t){return this.element.getAttribute(t)}},{kind:"method",decorators:[Mt],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"hasUserDefinedInitialValue",value:function(){return K(this.userDefinedInitialValues,this.attributeKey)}},{kind:"method",key:"setInitialValue",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e&&(this.pureInitialValues=JSON.parse(JSON.stringify(t))),this.hasUserDefinedInitialValue())if(G(this.targetValue)){for(var n in this.userDefinedInitialValues[this.attributeKey])t[n]=this.userDefinedInitialValues[this.attributeKey][n];this.initialValues[this.attributeKey]=t}else this.initialValues[this.attributeKey]=this.userDefinedInitialValues[this.attributeKey];else this.initialValues[this.attributeKey]=t}},{kind:"get",key:"initialValue",value:function(){return this.initialValues[this.attributeKey]}},{kind:"method",key:"_onGetContextOnce",value:function(){try{if(!0===this.context.fragment)return;this.gotContext||(this.onGetContext(),this.gotContext=!0)}catch(t){at.error(t),at.error(this.mcid)}}},{kind:"method",key:"onGetContext",value:function(){at.info('Overwritte the "onGetContext" method with the code you want to get executed',"info")}},{kind:"method",key:"lastWish",value:function(){}},{kind:"method",key:"onInitialise",value:function(){at.info('Overwritte the "onInialise" method with the code you want to get executed',"info")}},{kind:"method",key:"onProgress",value:function(t,e){}},{kind:"method",decorators:[kt],key:"setBlock",value:function(){}},{kind:"method",decorators:[bt],key:"unblock",value:function(){}}]}})),$t=function(t){u(i,t);var e=p(i);function i(t,n,s){var a;return r(this,i),(a=e.call(this,t,n,s)).runTimeInfo={currentMillisecond:0},a}return a(i,[{key:"duration",get:function(){return this.DescriptiveIncident.realClip.duration}},{key:"lastWish",value:function(){this.ownClip&&this.ownClip.context.unmount()}},{key:"onGetContext",value:function(){var t,e,i=this,r=this.DescriptiveIncident.realClip.exportConstructionArguments(),s=(t=this.context,e=this.mcid,t.rootElement.querySelectorAll("[".concat(j,'="').concat(e,'"]'))[0]),a=n(n({},r.props),{},{selector:void 0,host:s,containerParams:this.DescriptiveIncident.props.containerParams||{},originalDims:this.DescriptiveIncident.constructor.originalDims||{}});this.ownClip=new this.DescriptiveIncident.constructor.Incident(r.attrs,a),this.ownClip.DescriptiveIncident=this.DescriptiveIncident,this.DescriptiveIncident.realClip.addContext({clipId:this.id,context:this.ownClip.context,unblock:function(){return i.unblock()}},!0)}},{key:"onProgress",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!1!==this.DescriptiveIncident.realClip.context.contextLoaded){for(var i in this.DescriptiveIncident.realClip.instantiatedChannels){var r=this.DescriptiveIncident.realClip.instantiatedChannels[i];r.moveTo(this.runTimeInfo.currentMillisecond,e,this.id,n)}this.runTimeInfo.currentMillisecond=e,this.ownClip.onAfterProgress(t,e)}else this.setBlock()}}]),i}(Vt);function jt(t){var e=new t.Incident(t.attrs,n(n({},t.props),{},{id:t.id||nt()}),{context:t.context,mcid:t.mcid});return e.mc_plugin_npm_name=t.plugin_npm_name,e.plugin_channel_class=t.Channel,e.DescriptiveIncident=t.DescriptiveIncident,e}var Nt={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},easeInSine:function(t){return-1*Math.cos(t*(Math.PI/2))+1},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0==t?1:1*Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1==t?1:1*(1-Math.pow(2,-10*t))},easeInOutExpo:function(t){return 0==t||1==t?t:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){if(0==t||1==t)return t;var e=.3/(2*Math.PI)*Math.asin(1);return-Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/.3)},easeOutElastic:function(t){if(0==t||1==t)return t;var e=.3/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.3)+1},easeInOutElastic:function(t){if(0==t||1==t)return t;var e=.3*1.5,n=e/(2*Math.PI)*Math.asin(1);return t<1?Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/e)*-.5:Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/e)*.5+1},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=-1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-Nt.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t*1:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*Nt.easeInBounce(2*t):.5*(Nt.easeOutBounce(2*t-1)+1)}},Bt=P(null,(function(t,e){return{F:function(e){u(s,e);var i=p(s);function s(e,a,o,u){var l;return r(this,s),l=i.call(this,n(n({},e.props),{},{id:"".concat(e.incidentId,"_").concat(o)})),t(h(l)),l.contexts={},l.constructionIngredients=e,l.mcid=o,l.DescriptiveIncident=u,l.mc_plugin_npm_name=e.plugin_npm_name,l.plugin_channel_class=e.Channel,l.addContext(a),l.timeScale=1,u.realClip.duration>0&&(l.timeScale=l.props.duration/u.realClip.duration),u.realClip.subscribeToDurationChange((function(t){l.props.duration=l.timeScale*t,l.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:ht})})),l.easing=Nt.linear,K(l.props,"easing")&&(Array.isArray(l.props.easing)?l.easing=Dt(l.props.easing[0],l.props.easing[1],l.props.easing[2],l.props.easing[3]):l.easing=Nt[l.props.easing]),l}return s}(e),d:[{kind:"get",key:"originalContext",value:function(){return this.contexts[this.originalContextKey]}},{kind:"method",key:"onProgress",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=this.delay+this.props.duration+this.hiatus,s=e%r;0!==e&&0===s&&(s=this.delay+this.props.duration);var a=s-this.delay;a<0?a=0:a>this.props.duration&&(a=this.props.duration);var o=0===this.props.duration?0:a/this.props.duration,u=this.easing(o),l=u*this.props.duration*(1/this.timeScale);!1!==this.originalContext.context.contextLoaded&&this.contexts[n].onProgress(u,l,i)}},{kind:"method",key:"addContext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];0===Object.keys(this.contexts).length&&(this.originalContextKey=t.clipId);var i=n(n({},this.constructionIngredients),{},{context:t.context,mcid:this.mcid,Incident:$t,DescriptiveIncident:this.DescriptiveIncident});this.contexts[t.clipId]=jt(i),e&&this.contexts[t.clipId]._onGetContextOnce()}},{kind:"method",key:"handleAddContext",value:function(t,e){return this.addContext(e,!0),!0}},{kind:"method",key:"handleContextLoaded",value:function(t,e){this._onGetContextOnce()}},{kind:"method",decorators:[Mt],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"gotContext",value:function(){for(var t in this.contexts)this.contexts[t].gotContext()}},{kind:"method",key:"_onGetContextOnce",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t]._onGetContextOnce()}},{kind:"method",key:"lastWish",value:function(){for(var t in this.contexts)this.contexts[t].lastWish()}},{kind:"method",key:"onGetContext",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t].onGetContext()}}]}}),ft),Rt=P(null,(function(t,e){var i=function(e){u(s,e);var i=p(s);function s(e,a,o,u){var l;if(r(this,s),l=i.call(this,n(n({},e.props),{},{id:null!==u?"".concat(e.incidentId,"_").concat(o,"_").concat(u):"".concat(e.incidentId,"_").concat(o)})),t(h(l)),l.contexts={},l.constructionIngredients=e,l.mcid=o,l.attribute=u,l.mc_plugin_npm_name=e.plugin_npm_name,l.plugin_channel_class=e.Channel,l.DescriptiveIncident=e.DescriptiveIncident,l.addContext(a),null!==u){var c=l.constructionIngredients.attrs.animatedAttrs[l.attribute];Array.isArray(c)?l.originalAnimatedAttributeValue=k(c):G(c)?l.originalAnimatedAttributeValue=n({},c):l.originalAnimatedAttributeValue=c}return l.easing=Nt.linear,K(l.props,"easing")&&(Array.isArray(l.props.easing)?l.easing=Dt(l.props.easing[0],l.props.easing[1],l.props.easing[2],l.props.easing[3]):l.easing=Nt[l.props.easing]),l}return s}(e);return{F:i,d:[{kind:"get",key:"originalContext",value:function(){return this.contexts[this.originalContextKey]}},{kind:"get",key:"duration",value:function(){return m(l(i.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){for(var e in g(l(i.prototype),"duration",t,this,!0),this.contexts)this.contexts[e].duration=t}},{kind:"method",key:"addContext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!1;0===Object.keys(this.contexts).length&&(this.originalContextKey=t.clipId,this.originalClipContext=t.context,i=!0);var r=n(n({},this.constructionIngredients),{},{context:t.context,mcid:this.mcid}),s=jt(r);this.contexts[t.clipId]=s,i||null==this.attribute||this.contexts[t.clipId].setInitialValue(this.initialValue),e&&this.contexts[t.clipId].context.contextLoaded&&this.contexts[t.clipId]._onGetContextOnce()}},{kind:"method",key:"handleAddContext",value:function(t,e){return this.addContext(e,!0),!0}},{kind:"method",key:"handleContextLoaded",value:function(t,e){return this._onGetContextOnce(),!0}},{kind:"method",decorators:[Mt],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"onProgress",value:function(t,e,n){var i=e%(this.delay+this.props.duration+this.hiatus);0!==e&&0===i&&(i=this.delay+this.props.duration);var r=i-this.delay;r<0?r=0:r>this.props.duration&&(r=this.props.duration);var s=r/this.props.duration,a=this.easing(s),o=a*this.props.duration;if(null!=n)!1!==this.originalContext.context.contextLoaded&&this.contexts[n].onProgress(a,o);else for(var u in this.contexts)this.originalContextKey===u&&!0===this.originalContext.fragment||this.contexts[u].onProgress(a,o)}},{kind:"get",key:"animatedAttributeValue",value:function(){return this.constructionIngredients.attrs.animatedAttrs[this.attribute]}},{kind:"set",key:"animatedAttributeValue",value:function(t){this.constructionIngredients.attrs.animatedAttrs[this.attribute]=t}},{kind:"method",key:"gotContext",value:function(){for(var t in this.contexts)this.contexts[t].gotContext()}},{kind:"method",key:"_onGetContextOnce",value:function(){if(!1!==this.originalContext.context.contextLoaded)for(var t in this.contexts)this.contexts[t]._onGetContextOnce()}},{kind:"method",key:"lastWish",value:function(){for(var t in this.contexts)this.contexts[t].lastWish()}},{kind:"method",key:"onGetContext",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t].context.contextLoaded&&this.contexts[t].onGetContext()}},{kind:"get",key:"initialValue",value:function(){return this.originalContext.initialValue}},{kind:"get",key:"scratchValue",value:function(){return this.originalContext.scratchValue}},{kind:"get",key:"pureInitialValues",value:function(){return this.originalContext.pureInitialValues}},{kind:"method",key:"setInitialValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];for(var n in null===t&&(t=this.getScratchValue()),this.contexts)this.contexts[n].setInitialValue(JSON.parse(JSON.stringify(t)),e)}},{kind:"method",key:"getScratchValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!this.originalContext.context.contextLoaded)return 0;if(null!=t)return this.contexts[t].getScratchValue();var e=Object.keys(this.contexts);if(K(this.originalClipContext,"nonFragmentedContext")){var i=n(n({},this.constructionIngredients),{},{context:this.originalClipContext.nonFragmentedContext,mcid:this.mcid}),r=jt(i);return r.getScratchValue()}return 1===e.length?this.originalContext.getScratchValue():this.contexts[e[1]].getScratchValue()}},{kind:"method",key:"setCompoAttrKeyValue",value:function(t,e){for(var n in this.contexts)this.contexts[n].attrs.animatedAttrs[this.attribute][t]=e,this.contexts[n].lastWish(),this.contexts[n].onGetContext()}},{kind:"method",key:"play",value:function(t,e,n){return this.contexts[n].play(e)}},{kind:"method",key:"stop",value:function(t){this.contexts[t].stop()}}]}}),ft),Lt=function(t){u(i,t);var e=p(i);function i(t,n,s,a,o){var u;return r(this,i),(u=e.call(this,{},{id:"".concat(t.id,"_").concat(s)})).mcid=s,u.selector=a,u.data=o,u.setUp(t,n),u}return a(i,[{key:"setUp",value:function(t,e){for(var i in this.data.attrs.animatedAttrs){var r={};r[i]=this.data.attrs.animatedAttrs[i];var s=n(n({},this.data.attrs),{},{animatedAttrs:r}),a=n(n({},this.data.props),{},{selector:this.selector}),o={incidentId:t.id,attrs:s,props:a,Incident:t.constructor.Incident,plugin_npm_name:t.constructor.plugin_npm_name,Channel:t.constructor.Channel,DescriptiveIncident:t},u=new Rt(o,e,this.mcid,i);this.addChild(u,0)}}}]),i}(xt);var Ft=function(t){u(n,t);var e=p(n);function n(t,i){var s;return r(this,n),(s=e.call(this,{},{id:t.id})).contexts={},s.contexts[i.clipId]=i.context,s.originalContextKey=i.clipId,s.initParams=i.context.initParams,s.instantiatedCopiesContexts=i.instantiatedCopiesContexts,s.descriptiveIncident=t,s.staggerAttrs=[],s.staggerProps=[],s.setUp(t,i),s}return a(n,[{key:"originalContext",get:function(){return this.contexts[this.originalContextKey]}},{key:"parsePropsDynamicValues",value:function(t,e){for(var n=0;n<t.propsStaggers.length;n++)this.staggerProps.push({path:t.propsStaggers[n].path,values:t.propsStaggers[n].stagger.calculateValues(e,this.initParams)})}},{key:"parseAttrsDynamicValues",value:function(t,e){for(var n=0;n<t.attributesStaggers.length;n++)this.staggerAttrs.push({path:t.attributesStaggers[n].path,values:t.attributesStaggers[n].stagger.calculateValues(e,this.initParams)})}},{key:"setUp",value:function(t,e){var n,i,r=this.originalContext.getElements(t.selector());this.parsePropsDynamicValues(t,r),this.parseAttrsDynamicValues(t,r);for(var s=0;s<r.length;s++){for(var a in n=r[s],i=this._getElementMCID(n),this.instantiatedCopiesContexts)this._setElementMCID(this.instantiatedCopiesContexts[a],this.instantiatedCopiesContexts[a].getElements(t.selector())[s],i);this._createElementIncident(n,t,e,s,r.length,i)}}},{key:"handleRecalcDuration",value:function(t,e){var i=m(l(n.prototype),"handleRecalcDuration",this).call(this,t,e);return this.descriptiveIncident.propsStaggers.length>0&&(this.descriptiveIncident.dynamicDurationValue=1*this.duration),i}},{key:"lastWish",value:function(){this.descriptiveIncident.propsStaggers.length>0&&(this.descriptiveIncident.dynamicDurationValue=null,this.descriptiveIncident.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:ht})),m(l(n.prototype),"lastWish",this).call(this)}},{key:"_getElementMCID",value:function(t){var e=this.originalContext.getMCID(t);return e||(e=nt(!0),this.originalContext.setMCID(t,e)),e}},{key:"_setElementMCID",value:function(t,e,n){t.getMCID(e)||t.setMCID(e,n)}},{key:"_prepareAttrsPropsForElement",value:function(t,e){var n=function(t,e){for(var n=[],i=0;i<t.length;i++)n.push({path:t[i].path,value:t[i].values[e]});return n}(this.staggerAttrs,e),i=function(t,e){for(var n=[],i=0;i<t.length;i++)n.push({path:t[i].path,value:t[i].values[e]});return n}(this.staggerProps,e),r=t.attrs,s=t.props;if(n.length>0){r=JSON.parse(JSON.stringify(t.attrs));for(var a=0;a<n.length;a++)st(r,n[a].path,n[a].value)}if(i.length>0){s=JSON.parse(JSON.stringify(t.props));for(var o=0;o<i.length;o++)st(s,i[o].path,i[o].value)}return{attrs:r,props:s}}},{key:"_createElementIncident",value:function(t,e,n,i,r,s){var a=this._prepareAttrsPropsForElement(e,i);if(K(e.attrs,"animatedAttrs")){var o=new Lt(e,n,s,n.context.getElementSelectorByMCID(s),a);this.addChild(o,0)}else{var u=a.attrs,l=a.props,c={incidentId:e.id,attrs:u,props:l,Incident:e.constructor.Incident,plugin_npm_name:e.constructor.plugin_npm_name,Channel:e.constructor.Channel,DescriptiveIncident:e},h=new Rt(c,n,s,null);this.addChild(h,0)}}}]),n}(xt),zt=function(t){u(i,t);var e=p(i);function i(t,n){var s;return r(this,i),(s=e.call(this,t,n)).realClip=t.realClip,s}return a(i,[{key:"_createElementIncident",value:function(t,e,i,r,s,a){var o=e.realClip.exportConstructionArguments(),u=this._prepareAttrsPropsForElement(e,r),l=n(n(n(n({},e.props),{},{duration:e.realClip.duration},o.props),u.props),{},{selector:i.context.getElementSelectorByMCID(a),runTimeInfo:e.runTimeInfo}),c={incidentId:e.id,attrs:o.attrs,props:l,Incident:e.constructor.Incident,plugin_npm_name:e.constructor.plugin_npm_name,Channel:Ct,DescriptiveIncident:e},h=new Bt(c,i,a,e);this.addChild(h,0)}}]),i}(Ft),Gt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:window;K(r,i)||(r[i]={});for(var s=r[i],a=t.split("."),o=0;o<a.length-1;o++)K(s,a[o])||(s[a[o]]={}),s=s[a[o]];return!(K(s,a[a.length-1])&&!n)&&(s[a[a.length-1]]=e,!0)},qt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;""!==e&&(t=e+"."+t);for(var i,r=n,s=t.replaceAll(/\]/g,"").replaceAll(/\[/g,".").split("."),a=0;a<s.length;a++){if(!K(r,s[a]))return;i=r[s[a]],r=r[s[a]]}return i},Kt=new Set(["setValue","_getFromProxy","__createPathProxies","hasOwnProperty","pushValue","removePathKey","removeKey","restoreKey","getKeys","exportFlattened","isArray","push","sortBy","findIndex"]);function Jt(t){var e={},n=new Set,i=Array.isArray(t),r=i?t.length:0,s=null;return new Proxy(t,{get:function(a,o){return"length"===o&&i?r:Kt.has(o)?this[o]:n.has(o)?void 0:(i&&null!==s&&(o=s[o]),K(e,o)?e[o]:t[o])},isArray:function(){return i},_getFromProxy:function(t){return K(e,t)?e[t]:void 0},set:rt,sortBy:function(t){if(s=null,!i)return!1;s=function(t,e){for(var n=[],i=0;i<t.length;i++)n.push([t[i],i]);n.sort((function(t,n){return t[0][e]<n[0][e]?-1:1}));var r=[];for(var s in n)r.push(n[s][1]);return r}(this,t)},__createPathProxies:function(n){for(var r=e,a=t,o=0;o<n.length-1;o++){var u=i&&null!==s?s[n[o]]:n[o];if(0===o?void 0===r[u]:void 0===r._getFromProxy(u)){var l=Jt(void 0!==a&&a[u]||{});0===o?r[u]=l:r.setValue(u,l)}r=r[u],a=void 0!==a?a[u]:{}}return{currentObject:r,currentRealObect:a}},findIndex:function(t){if(!i)return null;for(var e=0;e<r;e++)if(t(this[e]))return e;return null},setValue:function(t,e){var i=t.split("."),r=this.__createPathProxies(i).currentObject,s=e;return G(e)&&(s=Jt(e)),1===i.length?(r[i[i.length-1]]=s,n.delete(s)):(r.setValue(i[i.length-1],s),r.restoreKey(i[i.length-1])),!0},pushValue:function(e,n){var i=e.split("."),r=this.__createPathProxies(i),s=r.currentObject;if(void 0===r.currentRealObect)return!1;var a=i[i.length-1],o=s[a],u=t[a];if(""===e&&(o=this,u=t),1!==i.length)return s.pushValue(a,n);var l=!1;if(void 0!==o){if(l=!0,!o.isArray())return!1}else if(!Array.isArray(u))return!1;if(!l){var c=Jt(u);s[a]=c,o=s[a]}return o.push(n),!0},push:function(t){return!!this.isArray()&&(e[r]=G(t)?Jt(t):t,r+=1,!0)},removePathKey:function(t){var e=t.split(".");return this.__createPathProxies(e).currentObject.removeKey(e[e.length-1]),!0},removeKey:function(t){n.add(t)},restoreKey:function(t){n.delete(t)},hasOwnProperty:function(t){return!(n.has(t)||void 0===this[t])},getKeys:function(){var r;if(i)return[];var s=Object.keys(t);return(r=s).push.apply(r,k(Object.keys(e))),s=s.filter((function(t){return!n.has(t)}))},exportFlattened:function(){var n;if(i)if(n=[],null!==s)for(var r=0;r<s.length;r++){var a=s[r];if(K(e,a)){var o=e[a];if(G(o))try{n[r]=e[a].exportFlattened()}catch(t){n[r]=o}else n[r]=o}else n[r]=t[a]}else{n=k(t);for(var u=0,l=Object.entries(e);u<l.length;u++){var c=y(l[u],2),h=c[0],d=c[1];if(G(d))try{n[h]=e[h].exportFlattened()}catch(t){n[h]=d}else n[h]=d}}else{n={};for(var p=this.getKeys(),f=0;f<p.length;f++){var m=p[f];void 0!==e[m]?n[m]=G(e[m])?e[m].exportFlattened():e[m]:n[m]=t[m]}}return n}})}var Wt="7.2.0";var Ht=function t(e,n,i={}){for(let s in n)if("object"==typeof(r=n[s])&&!Array.isArray(r)&&null!=r&&Object.keys(r).length>0)e[s]=e[s]||{},t(e[s],n[s],i);else{if(!0===i.skipIfExist&&void 0!==e[s])continue;e[s]=n[s]}var r;return e},Ut={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",stringHex:"The '{field}' field must be a hex string.",stringSingleLine:"The '{field}' field must be a single line string.",stringBase64:"The '{field}' field must be a base64 string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",tuple:"The '{field}' field must be an array.",tupleEmpty:"The '{field}' field must not be an empty array.",tupleLength:"The '{field}' field must contain {expected} items.",boolean:"The '{field}' field must be a boolean.",currency:"The '{field}' must be a valid currency format",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",emailEmpty:"The '{field}' field must not be empty.",emailMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",emailMax:"The '{field}' field length must be less than or equal to {expected} characters long.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",objectMinProps:"The object '{field}' must contain at least {expected} properties.",objectMaxProps:"The object '{field}' must contain {expected} properties at most.",url:"The '{field}' field must be a valid URL.",urlEmpty:"The '{field}' field must not be empty.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided.",classInstanceOf:"The '{field}' field must be an instance of the '{expected}' class.",objectID:"The '{field}' field must be an valid ObjectID"},Zt=function(){const t=[];return t.push("\n\t\treturn value;\n\t"),{source:t.join("\n")}},Qt=function({schema:t,messages:e},n,i){const r=[];if(r.push(`\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({type:"array",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`),!1===t.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"arrayEmpty",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.min&&r.push(`\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({type:"arrayMin",expected:t.min,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({type:"arrayMax",expected:t.max,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.length&&r.push(`\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({type:"arrayLength",expected:t.length,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.contains&&r.push(`\n\t\t\tif (value.indexOf(${JSON.stringify(t.contains)}) === -1) {\n\t\t\t\t${this.makeError({type:"arrayContains",expected:JSON.stringify(t.contains),actual:"value",messages:e})}\n\t\t\t}\n\t\t`),!0===t.unique&&r.push(`\n\t\t\tif(len > (new Set(value)).size) {\n\t\t\t\t${this.makeError({type:"arrayUnique",expected:"Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.enum){const n=JSON.stringify(t.enum);r.push(`\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tif (${n}.indexOf(value[i]) === -1) {\n\t\t\t\t\t${this.makeError({type:"arrayEnum",expected:'"'+t.enum.join(", ")+'"',actual:"value[i]",messages:e})}\n\t\t\t\t}\n\t\t\t}\n\t\t`)}if(null!=t.items){r.push("\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t\t\tvalue = arr[i];\n\t\t");const e=n+"[]",s=this.getRuleFromSchema(t.items),a=`arr[i] = ${i.async?"await ":""}context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)`;r.push(this.compileRule(s,i,e,a,"arr[i]")),r.push("\n\t\t\t}\n\t\t"),r.push("\n\t\treturn arr;\n\t")}else r.push("\n\t\treturn value;\n\t");return{source:r.join("\n")}},Xt=function({schema:t,messages:e},n,i){const r=[];let s=!1;return r.push("\n\t\tvar origValue = value;\n\t"),!0===t.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "boolean") {\n\t\t\t${this.makeError({type:"boolean",actual:"origValue",messages:e})}\n\t\t}\n\t\t\n\t\treturn value;\n\t`),{sanitized:s,source:r.join("\n")}},Yt=function({schema:t,messages:e,index:n},i,r){const s=[],a=t.instanceOf.name?t.instanceOf.name:"<UnknowClass>";return r.customs[n]?r.customs[n].schema=t:r.customs[n]={schema:t},s.push(`\n\t\tif (!(value instanceof context.customs[${n}].schema.instanceOf))\n\t\t\t${this.makeError({type:"classInstanceOf",actual:"value",expected:"'"+a+"'",messages:e})}\n\t`),s.push("\n\t\treturn value;\n\t"),{source:s.join("\n")}},te=function({schema:t,messages:e,index:n},i,r){const s=[];return s.push(`\n\t\t${this.makeCustomValidator({fnName:"check",path:i,schema:t,messages:e,context:r,ruleIndex:n})}\n\t\treturn value;\n\t`),{source:s.join("\n")}};var ee=function({schema:t,messages:e},n,i){const r=t.currencySymbol||null,s=t.thousandSeparator||",",a=t.decimalSeparator||".",o=t.customRegex;let u=!t.symbolOptional,l="(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$".replace(/~1/g,r?`\\${r}${u?"":"?"}`:"").replace("~2",s).replace("~3",a);const c=[];return c.push(`\n\t\tif (!value.match(${o||new RegExp(l)})) {\n\t\t\t${this.makeError({type:"currency",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\treturn value;\n\t`),{source:c.join("\n")}},ne=function({schema:t,messages:e},n,i){const r=[];let s=!1;return r.push("\n\t\tvar origValue = value;\n\t"),!0===t.convert&&(s=!0,r.push("\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t")),r.push(`\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError({type:"date",actual:"origValue",messages:e})}\n\n\t\treturn value;\n\t`),{sanitized:s,source:r.join("\n")}};const ie=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,re=/^\S+@\S+\.\S+$/;var se=function({schema:t,messages:e},n,i){const r=[],s="precise"==t.mode?ie:re;let a=!1;return r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),t.empty?r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t"):r.push(`\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({type:"emailEmpty",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),t.normalize&&(a=!0,r.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),null!=t.min&&r.push(`\n\t\t\tif (value.length < ${t.min}) {\n\t\t\t\t${this.makeError({type:"emailMin",expected:t.min,actual:"value.length",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (value.length > ${t.max}) {\n\t\t\t\t${this.makeError({type:"emailMax",expected:t.max,actual:"value.length",messages:e})}\n\t\t\t}\n\t\t`),r.push(`\n\t\tif (!${s.toString()}.test(value)) {\n\t\t\t${this.makeError({type:"email",actual:"value",messages:e})}\n\t\t}\n\n\t\treturn value;\n\t`),{sanitized:a,source:r.join("\n")}},ae=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (${JSON.stringify(t.values||[])}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({type:"enumValue",expected:'"'+t.values.join(", ")+'"',actual:"value",messages:e})}\n\t\t\t\n\t\t\treturn value;\n\t\t`}},oe=function({schema:t,messages:e},n,i){const r=[];return t.field?(t.strict?r.push(`\n\t\t\t\tif (value !== parent["${t.field}"])\n\t\t\t`):r.push(`\n\t\t\t\tif (value != parent["${t.field}"])\n\t\t\t`),r.push(`\n\t\t\t\t${this.makeError({type:"equalField",actual:"value",expected:JSON.stringify(t.field),messages:e})}\n\t\t`)):(t.strict?r.push(`\n\t\t\t\tif (value !== ${JSON.stringify(t.value)})\n\t\t\t`):r.push(`\n\t\t\t\tif (value != ${JSON.stringify(t.value)})\n\t\t\t`),r.push(`\n\t\t\t\t${this.makeError({type:"equalValue",actual:"value",expected:JSON.stringify(t.value),messages:e})}\n\t\t`)),r.push("\n\t\treturn value;\n\t"),{source:r.join("\n")}},ue=function({schema:t,messages:e},n,i){const r=[];return r.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),t.remove?r.push("\n\t\t\treturn undefined;\n\t\t"):r.push(`\n\t\t\t${this.makeError({type:"forbidden",actual:"value",messages:e})}\n\t\t`),r.push("\n\t\t}\n\n\t\treturn value;\n\t"),{source:r.join("\n")}},le=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError({type:"function",actual:"value",messages:e})}\n\n\t\t\treturn value;\n\t\t`}},ce=function({schema:t,messages:e},n,i){const r=[];r.push("\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t");for(let e=0;e<t.rules.length;e++){r.push("\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t");const s=this.getRuleFromSchema(t.rules[e]);r.push(this.compileRule(s,i,n,`var tmpVal = ${i.async?"await ":""}context.fn[%%INDEX%%](value, field, parent, errors, context);`,"tmpVal")),r.push("\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t")}return r.push("\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\n\t\treturn newVal;\n\t"),{source:r.join("\n")}},he=function({schema:t,messages:e},n,i){const r=[];r.push("\n\t\tvar origValue = value;\n\t");let s=!1;return!0===t.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError({type:"number",actual:"origValue",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),null!=t.min&&r.push(`\n\t\t\tif (value < ${t.min}) {\n\t\t\t\t${this.makeError({type:"numberMin",expected:t.min,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (value > ${t.max}) {\n\t\t\t\t${this.makeError({type:"numberMax",expected:t.max,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.equal&&r.push(`\n\t\t\tif (value !== ${t.equal}) {\n\t\t\t\t${this.makeError({type:"numberEqual",expected:t.equal,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.notEqual&&r.push(`\n\t\t\tif (value === ${t.notEqual}) {\n\t\t\t\t${this.makeError({type:"numberNotEqual",expected:t.notEqual,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.integer&&r.push(`\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({type:"numberInteger",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.positive&&r.push(`\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({type:"numberPositive",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.negative&&r.push(`\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({type:"numberNegative",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),r.push("\n\t\treturn value;\n\t"),{sanitized:s,source:r.join("\n")}};const de=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,pe=/["'\\\n\r\u2028\u2029]/g;function fe(t){return t.replace(pe,(function(t){switch(t){case'"':case"'":case"\\":return"\\"+t;case"\n":return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}}))}var me=function({schema:t,messages:e},n,i){const r=[];r.push(`\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError({type:"object",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`);const s=t.properties||t.props;if(s){r.push("var parentObj = value;"),r.push("var parentField = field;");const a=Object.keys(s);for(let t=0;t<a.length;t++){const e=a[t],o=fe(e),u=de.test(o)?`.${o}`:`['${o}']`,l=`parentObj${u}`,c=(n?n+".":"")+e;r.push(`\n// Field: ${fe(c)}`),r.push(`field = parentField ? parentField + "${u}" : "${o}";`),r.push(`value = ${l};`);const h=this.getRuleFromSchema(s[e]),d=`\n\t\t\t\t${l} = ${i.async?"await ":""}context.fn[%%INDEX%%](value, field, parentObj, errors, context);\n\t\t\t`;r.push(this.compileRule(h,i,c,d,l))}if(t.strict){const n=Object.keys(s);r.push(`\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(n)}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`),"remove"==t.strict?r.push("\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"):r.push(`\n\t\t\t\t\t${this.makeError({type:"objectStrict",expected:'"'+n.join(", ")+'"',actual:"invalidProps.join(', ')",messages:e})}\n\t\t\t\t`),r.push("\n\t\t\t\t}\n\t\t\t")}}return null==t.minProps&&null==t.maxProps||(t.strict?r.push(`\n\t\t\t\tprops = Object.keys(${s?"parentObj":"value"});\n\t\t\t`):r.push(`\n\t\t\t\tvar props = Object.keys(${s?"parentObj":"value"});\n\t\t\t\t${s?"field = parentField;":""}\n\t\t\t`)),null!=t.minProps&&r.push(`\n\t\t\tif (props.length < ${t.minProps}) {\n\t\t\t\t${this.makeError({type:"objectMinProps",expected:t.minProps,actual:"props.length",messages:e})}\n\t\t\t}\n\t\t`),null!=t.maxProps&&r.push(`\n\t\t\tif (props.length > ${t.maxProps}) {\n\t\t\t\t${this.makeError({type:"objectMaxProps",expected:t.maxProps,actual:"props.length",messages:e})}\n\t\t\t}\n\t\t`),s?r.push("\n\t\t\treturn parentObj;\n\t\t"):r.push("\n\t\t\treturn value;\n\t\t"),{source:r.join("\n")}},ve=function({schema:t,messages:e,index:n},i,r){const s=[];return r.customs[n]?r.customs[n].schema=t:r.customs[n]={schema:t},s.push(`\n\t\tconst ObjectID = context.customs[${n}].schema.ObjectID;\n\t\tif (!ObjectID.isValid(value)) {\n\t\t\t${this.makeError({type:"objectID",actual:"value",messages:e})}\n\t\t\treturn;\n\t\t}\n\t`),!0===t.convert?s.push("return new ObjectID(value)"):"hexString"===t.convert?s.push("return value.toString()"):s.push("return value"),{source:s.join("\n")}};const ge=/^-?[0-9]\d*(\.\d+)?$/,ye=/^[a-zA-Z]+$/,ke=/^[a-zA-Z0-9]+$/,be=/^[a-zA-Z0-9_-]+$/,xe=/^[0-9a-fA-F]+$/,Ce=/^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;var Ie=function({schema:t,messages:e},n,i){const r=[];let s=!1;if(!0===t.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`),t.trim&&(s=!0,r.push("\n\t\t\tvalue = value.trim();\n\t\t")),t.trimLeft&&(s=!0,r.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),t.trimRight&&(s=!0,r.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),t.padStart){s=!0;const e=null!=t.padChar?t.padChar:" ";r.push(`\n\t\t\tvalue = value.padStart(${t.padStart}, ${JSON.stringify(e)});\n\t\t`)}if(t.padEnd){s=!0;const e=null!=t.padChar?t.padChar:" ";r.push(`\n\t\t\tvalue = value.padEnd(${t.padEnd}, ${JSON.stringify(e)});\n\t\t`)}if(t.lowercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),t.uppercase&&(s=!0,r.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),t.localeLowercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),t.localeUppercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),r.push("\n\t\t\tvar len = value.length;\n\t"),!1===t.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"stringEmpty",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.min&&r.push(`\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({type:"stringMin",expected:t.min,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({type:"stringMax",expected:t.max,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.length&&r.push(`\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({type:"stringLength",expected:t.length,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.pattern){let n=t.pattern;"string"==typeof t.pattern&&(n=new RegExp(t.pattern,t.patternFlags));const i=`\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError({type:"stringPattern",expected:`"${n.toString().replace(/"/g,"\\$&")}"`,actual:"origValue",messages:e})}\n\t\t`;r.push(`\n\t\t\tif (${t.empty} === true && len === 0) {\n\t\t\t\t// Do nothing\n\t\t\t} else {\n\t\t\t\t${i}\n\t\t\t}\n\t\t`)}if(null!=t.contains&&r.push(`\n\t\t\tif (value.indexOf("${t.contains}") === -1) {\n\t\t\t\t${this.makeError({type:"stringContains",expected:'"'+t.contains+'"',actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.enum){const n=JSON.stringify(t.enum);r.push(`\n\t\t\tif (${n}.indexOf(value) === -1) {\n\t\t\t\t${this.makeError({type:"stringEnum",expected:'"'+t.enum.join(", ")+'"',actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`)}return!0===t.numeric&&r.push(`\n\t\t\tif (!${ge.toString()}.test(value) ) {\n\t\t\t\t${this.makeError({type:"stringNumeric",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alpha&&r.push(`\n\t\t\tif(!${ye.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlpha",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alphanum&&r.push(`\n\t\t\tif(!${ke.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlphanum",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alphadash&&r.push(`\n\t\t\tif(!${be.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlphadash",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.hex&&r.push(`\n\t\t\tif(value.length % 2 !== 0 || !${xe.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringHex",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.singleLine&&r.push(`\n\t\t\tif(value.includes("\\n")) {\n\t\t\t\t${this.makeError({type:"stringSingleLine",messages:e})}\n\t\t\t}\n\t\t`),!0===t.base64&&r.push(`\n\t\t\tif(!${Ce.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringBase64",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),r.push("\n\t\treturn value;\n\t"),{sanitized:s,source:r.join("\n")}},we=function({schema:t,messages:e},n,i){const r=[];if(null!=t.items){if(!Array.isArray(t.items))throw new Error(`Invalid '${t.type}' schema. The 'items' field must be an array.`);if(0===t.items.length)throw new Error(`Invalid '${t.type}' schema. The 'items' field must not be an empty array.`)}if(r.push(`\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({type:"tuple",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`),!1===t.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"tupleEmpty",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),null!=t.items){r.push(`\n\t\t\tif (${t.empty} !== false && len === 0) {\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (len !== ${t.items.length}) {\n\t\t\t\t${this.makeError({type:"tupleLength",expected:t.items.length,actual:"len",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),r.push("\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t");for(let e=0;e<t.items.length;e++){r.push(`\n\t\t\tvalue = arr[${e}];\n\t\t`);const s=`${n}[${e}]`,a=this.getRuleFromSchema(t.items[e]),o=`\n\t\t\tarr[${e}] = ${i.async?"await ":""}context.fn[%%INDEX%%](arr[${e}], (parentField ? parentField : "") + "[" + ${e} + "]", parent, errors, context);\n\t\t`;r.push(this.compileRule(a,i,s,o,`arr[${e}]`))}r.push("\n\t\treturn arr;\n\t")}else r.push("\n\t\treturn value;\n\t");return{source:r.join("\n")}};const Ee=/^https?:\/\/\S+/;var Ae=function({schema:t,messages:e},n,i){const r=[];return r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),t.empty?r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t"):r.push(`\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({type:"urlEmpty",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),r.push(`\n\t\tif (!${Ee.toString()}.test(value)) {\n\t\t\t${this.makeError({type:"url",actual:"value",messages:e})}\n\t\t}\n\n\t\treturn value;\n\t`),{source:r.join("\n")}};const Pe=/^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;var Oe=function({schema:t,messages:e},n){const i=[];return i.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${Pe.toString()}.test(val)) {\n\t\t\t${this.makeError({type:"uuid",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`),parseInt(t.version)<7&&i.push(`\n\t\t\tif (${t.version} !== version) {\n\t\t\t\t${this.makeError({type:"uuidVersion",expected:t.version,actual:"version",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),i.push(`\n\t\tswitch (version) {\n\t\tcase 0:\n\t\tcase 1:\n\t\tcase 2:\n\t\tcase 6:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(val.charAt(19)) === -1) {\n\t\t\t\t${this.makeError({type:"uuid",actual:"value",messages:e})}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`),{source:i.join("\n")}};const Se=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;var Te=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${Se.toString()}.test(v)) {\n\t\t\t\t${this.makeError({type:"mac",actual:"value",messages:e})}\n\t\t\t}\n\t\t\t\n\t\t\treturn value;\n\t\t`}},_e=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError({type:"luhn",actual:"value",messages:e})}\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`}};let De,Me,Ve,$e;var je=function(t){De||(De=It("prettier"),Me={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},Ve=It("cli-highlight"),$e={language:"js",theme:Ve.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});const e=De.format(t,Me);return Ve.highlight(e,$e)};let Ne;try{Ne=new Function("return Object.getPrototypeOf(async function(){}).constructor")()}catch(t){}const Be=Ht;var Re=class{constructor(t){if(this.opts={},this.defaults={},this.messages=Object.assign({},Ut),this.rules={any:Zt,array:Qt,boolean:Xt,class:Yt,custom:te,currency:ee,date:ne,email:se,enum:ae,equal:oe,forbidden:ue,function:le,multi:ce,number:he,object:me,objectID:ve,string:Ie,tuple:we,url:Ae,uuid:Oe,mac:Te,luhn:_e},this.aliases={},this.cache=new Map,t){if(Be(this.opts,t),t.defaults&&Be(this.defaults,t.defaults),t.messages)for(const e in t.messages)this.addMessage(e,t.messages[e]);if(t.aliases)for(const e in t.aliases)this.alias(e,t.aliases[e]);if(t.customRules)for(const e in t.customRules)this.add(e,t.customRules[e]);if(t.plugins){const e=t.plugins;if(!Array.isArray(e))throw new Error("Plugins type must be array");e.forEach(this.plugin.bind(this))}}}validate(t,e){return this.compile(e)(t)}wrapRequiredCheckSourceCode(t,e,n,i){const r=[];let s,a=!0===t.schema.optional||"forbidden"===t.schema.type,o=!0===t.schema.optional||!0===t.schema.nullable||"forbidden"===t.schema.type;if(null!=t.schema.default){let e;a=!1,!0!==t.schema.nullable&&(o=!1),"function"==typeof t.schema.default?(n.customs[t.index]||(n.customs[t.index]={}),n.customs[t.index].defaultFn=t.schema.default,e=`context.customs[${t.index}].defaultFn()`):e=JSON.stringify(t.schema.default),s=`\n\t\t\t\tvalue = ${e};\n\t\t\t\t${i} = value;\n\t\t\t`}else s=this.makeError({type:"required",actual:"value",messages:t.messages});return r.push(`\n\t\t\tif (value === undefined) { ${a?"\n// allow undefined\n":s} }\n\t\t\telse if (value === null) { ${o?"\n// allow null\n":s} }\n\t\t\t${e?`else { ${e} }`:""}\n\t\t`),r.join("\n")}compile(t){if(null===t||"object"!=typeof t)throw new Error("Invalid schema.");const e=this,n={index:0,async:!0===t.$$async,rules:[],fn:[],customs:{}};if(this.cache.clear(),delete t.$$async,n.async&&!Ne)throw new Error("Asynchronous mode is not supported.");if(!0!==t.$$root)if(Array.isArray(t)){t=this.getRuleFromSchema(t).schema}else{const e=Object.assign({},t);t={type:"object",strict:e.$$strict,properties:e},delete e.$$strict}const i=["var errors = [];","var field;","var parent = null;"],r=this.getRuleFromSchema(t);i.push(this.compileRule(r,n,null,(n.async?"await ":"")+"context.fn[%%INDEX%%](value, field, null, errors, context);","value")),i.push("if (errors.length) {"),i.push('\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message)\n\t\t\t\t\terr.message = err.message\n\t\t\t\t\t\t.replace(/\\{field\\}/g, err.field || "")\n\t\t\t\t\t\t.replace(/\\{expected\\}/g, err.expected != null ? err.expected : "")\n\t\t\t\t\t\t.replace(/\\{actual\\}/g, err.actual != null ? err.actual : "");\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t'),i.push("}"),i.push("return true;");const s=i.join("\n"),a=new(n.async?Ne:Function)("value","context",s);if(this.opts.debug){let t=function(t){return t};"undefined"==typeof window&&(t=je),n.fn.forEach(((e,n)=>console.log(t(`// Context.fn[${n}]\n`+e.toString())))),console.log(t("// Main check function\n"+a.toString()))}this.cache.clear();const o=function(t,i){return n.data=t,i&&i.meta&&(n.meta=i.meta),a.call(e,t,n)};return o.async=n.async,o}compileRule(t,e,n,i,r){const s=[],a=this.cache.get(t.schema);if(a)(t=a).cycle=!0,t.cycleStack=[],s.push(this.wrapRequiredCheckSourceCode(t,`\n\t\t\t\tvar rule = context.rules[${t.index}];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${i.replace(/%%INDEX%%/g,t.index)}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,e,r));else{this.cache.set(t.schema,t),t.index=e.index,e.rules[e.index]=t;const a=null!=n?n:"$$root";e.index++;const o=t.ruleFunction.call(this,t,n,e);o.source=o.source.replace(/%%INDEX%%/g,t.index);const u=new(e.async?Ne:Function)("value","field","parent","errors","context",o.source);e.fn[t.index]=u.bind(this),s.push(this.wrapRequiredCheckSourceCode(t,i.replace(/%%INDEX%%/g,t.index),e,r)),s.push(this.makeCustomValidator({vName:r,path:a,schema:t.schema,context:e,messages:t.messages,ruleIndex:t.index}))}return s.join("\n")}getRuleFromSchema(t){if("string"==typeof t)t=this.parseShortHand(t);else if(Array.isArray(t)){if(0==t.length)throw new Error("Invalid schema.");(t={type:"multi",rules:t}).rules.map((t=>this.getRuleFromSchema(t))).every((t=>1==t.schema.optional))&&(t.optional=!0)}if(t.$$type){const e=t.$$type,n=this.getRuleFromSchema(e).schema;delete t.$$type;const i=Object.assign({},t);for(const e in t)delete t[e];Be(t,n,{skipIfExist:!0}),t.props=i}const e=this.aliases[t.type];e&&(delete t.type,t=Be(t,e,{skipIfExist:!0}));const n=this.rules[t.type];if(!n)throw new Error("Invalid '"+t.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,t.messages),schema:Be(t,this.defaults[t.type],{skipIfExist:!0}),ruleFunction:n}}parseShortHand(t){const e=t.split("|").map((t=>t.trim()));let n,i=e[0];return n=i.endsWith("[]")?this.getRuleFromSchema({type:"array",items:i.slice(0,-2)}).schema:{type:e[0]},e.slice(1).map((t=>{const e=t.indexOf(":");if(-1!==e){const i=t.substr(0,e).trim();let r=t.substr(e+1).trim();"true"===r||"false"===r?r="true"===r:Number.isNaN(Number(r))||(r=Number(r)),n[i]=r}else t.startsWith("no-")?n[t.slice(3)]=!1:n[t]=!0})),n}makeError({type:t,field:e,expected:n,actual:i,messages:r}){const s={type:`"${t}"`,message:`"${r[t]}"`};s.field=e?`"${e}"`:"field",null!=n&&(s.expected=n),null!=i&&(s.actual=i);return`errors.push({ ${Object.keys(s).map((t=>`${t}: ${s[t]}`)).join(", ")} });`}makeCustomValidator({vName:t="value",fnName:e="custom",ruleIndex:n,path:i,schema:r,context:s,messages:a}){const o="rule"+n,u="fnCustomErrors"+n;if("function"==typeof r[e]){if(s.customs[n]?(s.customs[n].messages=a,s.customs[n].schema=r):s.customs[n]={messages:a,schema:r},this.opts.useNewCustomCheckerFunction)return`\n               \t\tconst ${o} = context.customs[${n}];\n\t\t\t\t\tconst ${u} = [];\n\t\t\t\t\t${t} = ${s.async?"await ":""}${o}.schema.${e}.call(this, ${t}, ${u} , ${o}.schema, "${i}", parent, context);\n\t\t\t\t\tif (Array.isArray(${u} )) {\n                  \t\t${u} .forEach(err => errors.push(Object.assign({ message: ${o}.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`;const l="res_"+o;return`\n\t\t\t\tconst ${o} = context.customs[${n}];\n\t\t\t\tconst ${l} = ${s.async?"await ":""}${o}.schema.${e}.call(this, ${t}, ${o}.schema, "${i}", parent, context);\n\t\t\t\tif (Array.isArray(${l})) {\n\t\t\t\t\t${l}.forEach(err => errors.push(Object.assign({ message: ${o}.messages[err.type], field }, err)));\n\t\t\t\t}\n\t\t`}return""}add(t,e){this.rules[t]=e}addMessage(t,e){this.messages[t]=e}alias(t,e){if(this.rules[t])throw new Error("Alias name must not be a rule name");this.aliases[t]=e}plugin(t){if("function"!=typeof t)throw new Error("Plugin fn type must be function");return t(this)}},Le="INUMBER",Fe="IOP1",ze="IOP2",Ge="IOP3",qe="IVAR",Ke="IVARNAME",Je="IFUNCALL",We="IFUNDEF",He="IEXPR",Ue="IEXPREVAL",Ze="IMEMBER",Qe="IENDSTATEMENT",Xe="IARRAY";function Ye(t,e){this.type=t,this.value=null!=e?e:0}function tn(t){return new Ye(Fe,t)}function en(t){return new Ye(ze,t)}function nn(t){return new Ye(Ge,t)}function rn(t,e,n,i,r){for(var s,a,o,u,l=[],c=[],h=0;h<t.length;h++){var d=t[h],p=d.type;if(p===Le||p===Ke)Array.isArray(d.value)?l.push.apply(l,rn(d.value.map((function(t){return new Ye(Le,t)})).concat(new Ye(Xe,d.value.length)),e,n,i,r)):l.push(d);else if(p===qe&&r.hasOwnProperty(d.value))d=new Ye(Le,r[d.value]),l.push(d);else if(p===ze&&l.length>1)a=l.pop(),s=l.pop(),u=n[d.value],d=new Ye(Le,u(s.value,a.value)),l.push(d);else if(p===Ge&&l.length>2)o=l.pop(),a=l.pop(),s=l.pop(),"?"===d.value?l.push(s.value?a.value:o.value):(u=i[d.value],d=new Ye(Le,u(s.value,a.value,o.value)),l.push(d));else if(p===Fe&&l.length>0)s=l.pop(),u=e[d.value],d=new Ye(Le,u(s.value)),l.push(d);else if(p===He){for(;l.length>0;)c.push(l.shift());c.push(new Ye(He,rn(d.value,e,n,i,r)))}else if(p===Ze&&l.length>0)s=l.pop(),l.push(new Ye(Le,s.value[d.value]));else{for(;l.length>0;)c.push(l.shift());c.push(d)}}for(;l.length>0;)c.push(l.shift());return c}function sn(t,e,n){for(var i=[],r=0;r<t.length;r++){var s=t[r],a=s.type;if(a===qe&&s.value===e)for(var o=0;o<n.tokens.length;o++){var u,l=n.tokens[o];u=l.type===Fe?tn(l.value):l.type===ze?en(l.value):l.type===Ge?nn(l.value):new Ye(l.type,l.value),i.push(u)}else a===He?i.push(new Ye(He,sn(s.value,e,n))):i.push(s)}return i}function an(t,e,n){var i,r,s,a,o,u,l=[];if(un(t))return ln(t,n);for(var c=t.length,h=0;h<c;h++){var d=t[h],p=d.type;if(p===Le||p===Ke)l.push(d.value);else if(p===ze)r=l.pop(),i=l.pop(),"and"===d.value?l.push(!!i&&!!an(r,e,n)):"or"===d.value?l.push(!!i||!!an(r,e,n)):"="===d.value?(a=e.binaryOps[d.value],l.push(a(i,an(r,e,n),n))):(a=e.binaryOps[d.value],l.push(a(ln(i,n),ln(r,n))));else if(p===Ge)s=l.pop(),r=l.pop(),i=l.pop(),"?"===d.value?l.push(an(i?r:s,e,n)):(a=e.ternaryOps[d.value],l.push(a(ln(i,n),ln(r,n),ln(s,n))));else if(p===qe)if(d.value in e.functions)l.push(e.functions[d.value]);else if(d.value in e.unaryOps&&e.parser.isOperatorEnabled(d.value))l.push(e.unaryOps[d.value]);else{var f=n[d.value];if(void 0===f)throw new Error("undefined variable: "+d.value);l.push(f)}else if(p===Fe)i=l.pop(),a=e.unaryOps[d.value],l.push(a(ln(i,n)));else if(p===Je){for(u=d.value,o=[];u-- >0;)o.unshift(ln(l.pop(),n));if(!(a=l.pop()).apply||!a.call)throw new Error(a+" is not a function");l.push(a.apply(void 0,o))}else if(p===We)l.push(function(){for(var t=l.pop(),i=[],r=d.value;r-- >0;)i.unshift(l.pop());var s=l.pop(),a=function(){for(var r=Object.assign({},n),s=0,a=i.length;s<a;s++)r[i[s]]=arguments[s];return an(t,e,r)};return Object.defineProperty(a,"name",{value:s,writable:!1}),n[s]=a,a}());else if(p===He)l.push(on(d,e));else if(p===Ue)l.push(d);else if(p===Ze)i=l.pop(),l.push(i[d.value]);else if(p===Qe)l.pop();else{if(p!==Xe)throw new Error("invalid Expression");for(u=d.value,o=[];u-- >0;)o.unshift(l.pop());l.push(o)}}if(l.length>1)throw new Error("invalid Expression (parity)");return 0===l[0]?0:ln(l[0],n)}function on(t,e,n){return un(t)?t:{type:Ue,value:function(n){return an(t.value,e,n)}}}function un(t){return t&&t.type===Ue}function ln(t,e){return un(t)?t.value(e):t}function cn(t,e){for(var n,i,r,s,a,o,u=[],l=0;l<t.length;l++){var c=t[l],h=c.type;if(h===Le)"number"==typeof c.value&&c.value<0?u.push("("+c.value+")"):Array.isArray(c.value)?u.push("["+c.value.map(hn).join(", ")+"]"):u.push(hn(c.value));else if(h===ze)i=u.pop(),n=u.pop(),s=c.value,e?"^"===s?u.push("Math.pow("+n+", "+i+")"):"and"===s?u.push("(!!"+n+" && !!"+i+")"):"or"===s?u.push("(!!"+n+" || !!"+i+")"):"||"===s?u.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+n+"),("+i+")))"):"=="===s?u.push("("+n+" === "+i+")"):"!="===s?u.push("("+n+" !== "+i+")"):"["===s?u.push(n+"[("+i+") | 0]"):u.push("("+n+" "+s+" "+i+")"):"["===s?u.push(n+"["+i+"]"):u.push("("+n+" "+s+" "+i+")");else if(h===Ge){if(r=u.pop(),i=u.pop(),n=u.pop(),"?"!==(s=c.value))throw new Error("invalid Expression");u.push("("+n+" ? "+i+" : "+r+")")}else if(h===qe||h===Ke)u.push(c.value);else if(h===Fe)n=u.pop(),"-"===(s=c.value)||"+"===s?u.push("("+s+n+")"):e?"not"===s?u.push("(!"+n+")"):"!"===s?u.push("fac("+n+")"):u.push(s+"("+n+")"):"!"===s?u.push("("+n+"!)"):u.push("("+s+" "+n+")");else if(h===Je){for(o=c.value,a=[];o-- >0;)a.unshift(u.pop());s=u.pop(),u.push(s+"("+a.join(", ")+")")}else if(h===We){for(i=u.pop(),o=c.value,a=[];o-- >0;)a.unshift(u.pop());n=u.pop(),e?u.push("("+n+" = function("+a.join(", ")+") { return "+i+" })"):u.push("("+n+"("+a.join(", ")+") = "+i+")")}else if(h===Ze)n=u.pop(),u.push(n+"."+c.value);else if(h===Xe){for(o=c.value,a=[];o-- >0;)a.unshift(u.pop());u.push("["+a.join(", ")+"]")}else if(h===He)u.push("("+cn(c.value,e)+")");else if(h!==Qe)throw new Error("invalid Expression")}return u.length>1&&(u=e?[u.join(",")]:[u.join(";")]),String(u[0])}function hn(t){return"string"==typeof t?JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):t}function dn(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return!0;return!1}function pn(t,e,n){for(var i=!!(n=n||{}).withMembers,r=null,s=0;s<t.length;s++){var a=t[s];a.type===qe||a.type===Ke?i||dn(e,a.value)?null!==r?(dn(e,r)||e.push(r),r=a.value):r=a.value:e.push(a.value):a.type===Ze&&i&&null!==r?r+="."+a.value:a.type===He?pn(a.value,e,n):null!==r&&(dn(e,r)||e.push(r),r=null)}null===r||dn(e,r)||e.push(r)}function fn(t,e){this.tokens=t,this.parser=e,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.functions=e.functions}Ye.prototype.toString=function(){switch(this.type){case Le:case Fe:case ze:case Ge:case qe:case Ke:case Qe:return this.value;case Je:return"CALL "+this.value;case We:return"DEF "+this.value;case Xe:return"ARRAY "+this.value;case Ze:return"."+this.value;default:return"Invalid Instruction"}},fn.prototype.simplify=function(t){return t=t||{},new fn(rn(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,t),this.parser)},fn.prototype.substitute=function(t,e){return e instanceof fn||(e=this.parser.parse(String(e))),new fn(sn(this.tokens,t,e),this.parser)},fn.prototype.evaluate=function(t){return t=t||{},an(this.tokens,this,t)},fn.prototype.toString=function(){return cn(this.tokens,!1)},fn.prototype.symbols=function(t){t=t||{};var e=[];return pn(this.tokens,e,t),e},fn.prototype.variables=function(t){t=t||{};var e=[];pn(this.tokens,e,t);var n=this.functions;return e.filter((function(t){return!(t in n)}))},fn.prototype.toJSFunction=function(t,e){var n=this,i=new Function(t,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+cn(this.simplify(e).tokens,!0)+"; }");return function(){return i.apply(n,arguments)}};var mn="TEOF",vn="TOP",gn="TNUMBER",yn="TSTRING",kn="TPAREN",bn="TBRACKET",xn="TCOMMA",Cn="TNAME",In="TSEMICOLON";function wn(t,e,n){this.type=t,this.value=e,this.index=n}function En(t,e){this.pos=0,this.current=null,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.consts=t.consts,this.expression=e,this.savedPosition=0,this.savedCurrent=null,this.options=t.options,this.parser=t}wn.prototype.toString=function(){return this.type+": "+this.value},En.prototype.newToken=function(t,e,n){return new wn(t,e,null!=n?n:this.pos)},En.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current},En.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent},En.prototype.next=function(){return this.pos>=this.expression.length?this.newToken(mn,"EOF"):this.isWhitespace()||this.isComment()?this.next():this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName()?this.current:void this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')},En.prototype.isString=function(){var t=!1,e=this.pos,n=this.expression.charAt(e);if("'"===n||'"'===n)for(var i=this.expression.indexOf(n,e+1);i>=0&&this.pos<this.expression.length;){if(this.pos=i+1,"\\"!==this.expression.charAt(i-1)){var r=this.expression.substring(e+1,i);this.current=this.newToken(yn,this.unescape(r),e),t=!0;break}i=this.expression.indexOf(n,i+1)}return t},En.prototype.isParen=function(){var t=this.expression.charAt(this.pos);return("("===t||")"===t)&&(this.current=this.newToken(kn,t),this.pos++,!0)},En.prototype.isBracket=function(){var t=this.expression.charAt(this.pos);return!("["!==t&&"]"!==t||!this.isOperatorEnabled("["))&&(this.current=this.newToken(bn,t),this.pos++,!0)},En.prototype.isComma=function(){return","===this.expression.charAt(this.pos)&&(this.current=this.newToken(xn,","),this.pos++,!0)},En.prototype.isSemicolon=function(){return";"===this.expression.charAt(this.pos)&&(this.current=this.newToken(In,";"),this.pos++,!0)},En.prototype.isConst=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var n=this.expression.charAt(e);if(n.toUpperCase()===n.toLowerCase()&&(e===this.pos||"_"!==n&&"."!==n&&(n<"0"||n>"9")))break}if(e>t){var i=this.expression.substring(t,e);if(i in this.consts)return this.current=this.newToken(gn,this.consts[i]),this.pos+=i.length,!0}return!1},En.prototype.isNamedOp=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var n=this.expression.charAt(e);if(n.toUpperCase()===n.toLowerCase()&&(e===this.pos||"_"!==n&&(n<"0"||n>"9")))break}if(e>t){var i=this.expression.substring(t,e);if(this.isOperatorEnabled(i)&&(i in this.binaryOps||i in this.unaryOps||i in this.ternaryOps))return this.current=this.newToken(vn,i),this.pos+=i.length,!0}return!1},En.prototype.isName=function(){for(var t=this.pos,e=t,n=!1;e<this.expression.length;e++){var i=this.expression.charAt(e);if(i.toUpperCase()===i.toLowerCase()){if(e===this.pos&&("$"===i||"_"===i)){"_"===i&&(n=!0);continue}if(e===this.pos||!n||"_"!==i&&(i<"0"||i>"9"))break}else n=!0}if(n){var r=this.expression.substring(t,e);return this.current=this.newToken(Cn,r),this.pos+=r.length,!0}return!1},En.prototype.isWhitespace=function(){for(var t=!1,e=this.expression.charAt(this.pos);!(" "!==e&&"\t"!==e&&"\n"!==e&&"\r"!==e||(t=!0,this.pos++,this.pos>=this.expression.length));)e=this.expression.charAt(this.pos);return t};var An=/^[0-9a-f]{4}$/i;function Pn(t,e,n){this.parser=t,this.tokens=e,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=!1!==n.allowMemberAccess}En.prototype.unescape=function(t){var e=t.indexOf("\\");if(e<0)return t;for(var n=t.substring(0,e);e>=0;){var i=t.charAt(++e);switch(i){case"'":n+="'";break;case'"':n+='"';break;case"\\":n+="\\";break;case"/":n+="/";break;case"b":n+="\b";break;case"f":n+="\f";break;case"n":n+="\n";break;case"r":n+="\r";break;case"t":n+="\t";break;case"u":var r=t.substring(e+1,e+5);An.test(r)||this.parseError("Illegal escape sequence: \\u"+r),n+=String.fromCharCode(parseInt(r,16)),e+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+i+'"')}++e;var s=t.indexOf("\\",e);n+=t.substring(e,s<0?t.length:s),e=s}return n},En.prototype.isComment=function(){return"/"===this.expression.charAt(this.pos)&&"*"===this.expression.charAt(this.pos+1)&&(this.pos=this.expression.indexOf("*/",this.pos)+2,1===this.pos&&(this.pos=this.expression.length),!0)},En.prototype.isRadixInteger=function(){var t,e,n=this.pos;if(n>=this.expression.length-2||"0"!==this.expression.charAt(n))return!1;if(++n,"x"===this.expression.charAt(n))t=16,e=/^[0-9a-f]$/i,++n;else{if("b"!==this.expression.charAt(n))return!1;t=2,e=/^[01]$/i,++n}for(var i=!1,r=n;n<this.expression.length;){var s=this.expression.charAt(n);if(!e.test(s))break;n++,i=!0}return i&&(this.current=this.newToken(gn,parseInt(this.expression.substring(r,n),t)),this.pos=n),i},En.prototype.isNumber=function(){for(var t,e=!1,n=this.pos,i=n,r=n,s=!1,a=!1;n<this.expression.length&&((t=this.expression.charAt(n))>="0"&&t<="9"||!s&&"."===t);)"."===t?s=!0:a=!0,n++,e=a;if(e&&(r=n),"e"===t||"E"===t){n++;for(var o=!0,u=!1;n<this.expression.length;){if(t=this.expression.charAt(n),!o||"+"!==t&&"-"!==t){if(!(t>="0"&&t<="9"))break;u=!0,o=!1}else o=!1;n++}u||(n=r)}return e?(this.current=this.newToken(gn,parseFloat(this.expression.substring(i,n))),this.pos=n):this.pos=r,e},En.prototype.isOperator=function(){var t=this.pos,e=this.expression.charAt(this.pos);if("+"===e||"-"===e||"*"===e||"/"===e||"%"===e||"^"===e||"?"===e||":"===e||"."===e)this.current=this.newToken(vn,e);else if("∙"===e||"•"===e)this.current=this.newToken(vn,"*");else if(">"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(vn,">="),this.pos++):this.current=this.newToken(vn,">");else if("<"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(vn,"<="),this.pos++):this.current=this.newToken(vn,"<");else if("|"===e){if("|"!==this.expression.charAt(this.pos+1))return!1;this.current=this.newToken(vn,"||"),this.pos++}else if("="===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(vn,"=="),this.pos++):this.current=this.newToken(vn,e);else{if("!"!==e)return!1;"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(vn,"!="),this.pos++):this.current=this.newToken(vn,e)}return this.pos++,!!this.isOperatorEnabled(this.current.value)||(this.pos=t,!1)},En.prototype.isOperatorEnabled=function(t){return this.parser.isOperatorEnabled(t)},En.prototype.getCoordinates=function(){var t,e=0,n=-1;do{e++,t=this.pos-n,n=this.expression.indexOf("\n",n+1)}while(n>=0&&n<this.pos);return{line:e,column:t}},En.prototype.parseError=function(t){var e=this.getCoordinates();throw new Error("parse error ["+e.line+":"+e.column+"]: "+t)},Pn.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()},Pn.prototype.tokenMatches=function(t,e){return void 0===e||(Array.isArray(e)?dn(e,t.value):"function"==typeof e?e(t):t.value===e)},Pn.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()},Pn.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken},Pn.prototype.accept=function(t,e){return!(this.nextToken.type!==t||!this.tokenMatches(this.nextToken,e))&&(this.next(),!0)},Pn.prototype.expect=function(t,e){if(!this.accept(t,e)){var n=this.tokens.getCoordinates();throw new Error("parse error ["+n.line+":"+n.column+"]: Expected "+(e||t))}},Pn.prototype.parseAtom=function(t){var e=this.tokens.unaryOps;if(this.accept(Cn)||this.accept(vn,(function(t){return t.value in e})))t.push(new Ye(qe,this.current.value));else if(this.accept(gn))t.push(new Ye(Le,this.current.value));else if(this.accept(yn))t.push(new Ye(Le,this.current.value));else if(this.accept(kn,"("))this.parseExpression(t),this.expect(kn,")");else{if(!this.accept(bn,"["))throw new Error("unexpected "+this.nextToken);if(this.accept(bn,"]"))t.push(new Ye(Xe,0));else{var n=this.parseArrayList(t);t.push(new Ye(Xe,n))}}},Pn.prototype.parseExpression=function(t){var e=[];this.parseUntilEndStatement(t,e)||(this.parseVariableAssignmentExpression(e),this.parseUntilEndStatement(t,e)||this.pushExpression(t,e))},Pn.prototype.pushExpression=function(t,e){for(var n=0,i=e.length;n<i;n++)t.push(e[n])},Pn.prototype.parseUntilEndStatement=function(t,e){return!!this.accept(In)&&(!this.nextToken||this.nextToken.type===mn||this.nextToken.type===kn&&")"===this.nextToken.value||e.push(new Ye(Qe)),this.nextToken.type!==mn&&this.parseExpression(e),t.push(new Ye(He,e)),!0)},Pn.prototype.parseArrayList=function(t){for(var e=0;!this.accept(bn,"]");)for(this.parseExpression(t),++e;this.accept(xn);)this.parseExpression(t),++e;return e},Pn.prototype.parseVariableAssignmentExpression=function(t){for(this.parseConditionalExpression(t);this.accept(vn,"=");){var e=t.pop(),n=[],i=t.length-1;if(e.type!==Je){if(e.type!==qe&&e.type!==Ze)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(n),t.push(new Ye(Ke,e.value)),t.push(new Ye(He,n)),t.push(en("="))}else{if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var r=0,s=e.value+1;r<s;r++){var a=i-r;t[a].type===qe&&(t[a]=new Ye(Ke,t[a].value))}this.parseVariableAssignmentExpression(n),t.push(new Ye(He,n)),t.push(new Ye(We,e.value))}}},Pn.prototype.parseConditionalExpression=function(t){for(this.parseOrExpression(t);this.accept(vn,"?");){var e=[],n=[];this.parseConditionalExpression(e),this.expect(vn,":"),this.parseConditionalExpression(n),t.push(new Ye(He,e)),t.push(new Ye(He,n)),t.push(nn("?"))}},Pn.prototype.parseOrExpression=function(t){for(this.parseAndExpression(t);this.accept(vn,"or");){var e=[];this.parseAndExpression(e),t.push(new Ye(He,e)),t.push(en("or"))}},Pn.prototype.parseAndExpression=function(t){for(this.parseComparison(t);this.accept(vn,"and");){var e=[];this.parseComparison(e),t.push(new Ye(He,e)),t.push(en("and"))}};var On=["==","!=","<","<=",">=",">","in"];Pn.prototype.parseComparison=function(t){for(this.parseAddSub(t);this.accept(vn,On);){var e=this.current;this.parseAddSub(t),t.push(en(e.value))}};var Sn=["+","-","||"];Pn.prototype.parseAddSub=function(t){for(this.parseTerm(t);this.accept(vn,Sn);){var e=this.current;this.parseTerm(t),t.push(en(e.value))}};var Tn=["*","/","%"];function _n(t,e){return Number(t)+Number(e)}function Dn(t,e){return t-e}function Mn(t,e){return t*e}function Vn(t,e){return t/e}function $n(t,e){return t%e}function jn(t,e){return Array.isArray(t)&&Array.isArray(e)?t.concat(e):""+t+e}function Nn(t,e){return t===e}function Bn(t,e){return t!==e}function Rn(t,e){return t>e}function Ln(t,e){return t<e}function Fn(t,e){return t>=e}function zn(t,e){return t<=e}function Gn(t,e){return Boolean(t&&e)}function qn(t,e){return Boolean(t||e)}function Kn(t,e){return dn(e,t)}function Jn(t){return(Math.exp(t)-Math.exp(-t))/2}function Wn(t){return(Math.exp(t)+Math.exp(-t))/2}function Hn(t){return t===1/0?1:t===-1/0?-1:(Math.exp(t)-Math.exp(-t))/(Math.exp(t)+Math.exp(-t))}function Un(t){return t===-1/0?t:Math.log(t+Math.sqrt(t*t+1))}function Zn(t){return Math.log(t+Math.sqrt(t*t-1))}function Qn(t){return Math.log((1+t)/(1-t))/2}function Xn(t){return Math.log(t)*Math.LOG10E}function Yn(t){return-t}function ti(t){return!t}function ei(t){return t<0?Math.ceil(t):Math.floor(t)}function ni(t){return Math.random()*(t||1)}function ii(t){return si(t+1)}Pn.prototype.parseTerm=function(t){for(this.parseFactor(t);this.accept(vn,Tn);){var e=this.current;this.parseFactor(t),t.push(en(e.value))}},Pn.prototype.parseFactor=function(t){var e=this.tokens.unaryOps;if(this.save(),this.accept(vn,(function(t){return t.value in e}))){if("-"!==this.current.value&&"+"!==this.current.value){if(this.nextToken.type===kn&&"("===this.nextToken.value)return this.restore(),void this.parseExponential(t);if(this.nextToken.type===In||this.nextToken.type===xn||this.nextToken.type===mn||this.nextToken.type===kn&&")"===this.nextToken.value)return this.restore(),void this.parseAtom(t)}var n=this.current;this.parseFactor(t),t.push(tn(n.value))}else this.parseExponential(t)},Pn.prototype.parseExponential=function(t){for(this.parsePostfixExpression(t);this.accept(vn,"^");)this.parseFactor(t),t.push(en("^"))},Pn.prototype.parsePostfixExpression=function(t){for(this.parseFunctionCall(t);this.accept(vn,"!");)t.push(tn("!"))},Pn.prototype.parseFunctionCall=function(t){var e=this.tokens.unaryOps;if(this.accept(vn,(function(t){return t.value in e}))){var n=this.current;this.parseAtom(t),t.push(tn(n.value))}else for(this.parseMemberExpression(t);this.accept(kn,"(");)if(this.accept(kn,")"))t.push(new Ye(Je,0));else{var i=this.parseArgumentList(t);t.push(new Ye(Je,i))}},Pn.prototype.parseArgumentList=function(t){for(var e=0;!this.accept(kn,")");)for(this.parseExpression(t),++e;this.accept(xn);)this.parseExpression(t),++e;return e},Pn.prototype.parseMemberExpression=function(t){for(this.parseAtom(t);this.accept(vn,".")||this.accept(bn,"[");){var e=this.current;if("."===e.value){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(Cn),t.push(new Ye(Ze,this.current.value))}else{if("["!==e.value)throw new Error("unexpected symbol: "+e.value);if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(t),this.expect(bn,"]"),t.push(en("["))}}};var ri=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function si(t){var e,n;if(function(t){return isFinite(t)&&t===Math.round(t)}(t)){if(t<=0)return isFinite(t)?1/0:NaN;if(t>171)return 1/0;for(var i=t-2,r=t-1;i>1;)r*=i,i--;return 0===r&&(r=1),r}if(t<.5)return Math.PI/(Math.sin(Math.PI*t)*si(1-t));if(t>=171.35)return 1/0;if(t>85){var s=t*t,a=s*t,o=a*t,u=o*t;return Math.sqrt(2*Math.PI/t)*Math.pow(t/Math.E,t)*(1+1/(12*t)+1/(288*s)-139/(51840*a)-571/(2488320*o)+163879/(209018880*u)+5246819/(75246796800*u*t))}--t,n=ri[0];for(var l=1;l<ri.length;++l)n+=ri[l]/(t+l);return e=t+4.7421875+.5,Math.sqrt(2*Math.PI)*Math.pow(e,t+.5)*Math.exp(-e)*n}function ai(t){return Array.isArray(t)?t.length:String(t).length}function oi(){for(var t=0,e=0,n=0;n<arguments.length;n++){var i,r=Math.abs(arguments[n]);e<r?(t=t*(i=e/r)*i+1,e=r):t+=r>0?(i=r/e)*i:r}return e===1/0?1/0:e*Math.sqrt(t)}function ui(t,e,n){return t?e:n}function li(t,e){return void 0===e||0==+e?Math.round(t):(t=+t,e=-+e,isNaN(t)||"number"!=typeof e||e%1!=0?NaN:(t=t.toString().split("e"),+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]-e:-e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+e:e))))}function ci(t,e,n){return n&&(n[t]=e),e}function hi(t,e){return t[0|e]}function di(t){return 1===arguments.length&&Array.isArray(t)?Math.max.apply(Math,t):Math.max.apply(Math,arguments)}function pi(t){return 1===arguments.length&&Array.isArray(t)?Math.min.apply(Math,t):Math.min.apply(Math,arguments)}function fi(t,e){if("function"!=typeof t)throw new Error("First argument to map is not a function");if(!Array.isArray(e))throw new Error("Second argument to map is not an array");return e.map((function(e,n){return t(e,n)}))}function mi(t,e,n){if("function"!=typeof t)throw new Error("First argument to fold is not a function");if(!Array.isArray(n))throw new Error("Second argument to fold is not an array");return n.reduce((function(e,n,i){return t(e,n,i)}),e)}function vi(t,e){if("function"!=typeof t)throw new Error("First argument to filter is not a function");if(!Array.isArray(e))throw new Error("Second argument to filter is not an array");return e.filter((function(e,n){return t(e,n)}))}function gi(t,e){if(!Array.isArray(e)&&"string"!=typeof e)throw new Error("Second argument to indexOf is not a string or array");return e.indexOf(t)}function yi(t,e){if(!Array.isArray(e))throw new Error("Second argument to join is not an array");return e.join(t)}function ki(t){return(t>0)-(t<0)||+t}var bi=1/3;function xi(t){return t<0?-Math.pow(-t,bi):Math.pow(t,bi)}function Ci(t){return Math.exp(t)-1}function Ii(t){return Math.log(1+t)}function wi(t){return Math.log(t)/Math.LN2}function Ei(t){this.options=t||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||Jn,cosh:Math.cosh||Wn,tanh:Math.tanh||Hn,asinh:Math.asinh||Un,acosh:Math.acosh||Zn,atanh:Math.atanh||Qn,sqrt:Math.sqrt,cbrt:Math.cbrt||xi,log:Math.log,log2:Math.log2||wi,ln:Math.log,lg:Math.log10||Xn,log10:Math.log10||Xn,expm1:Math.expm1||Ci,log1p:Math.log1p||Ii,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||ei,"-":Yn,"+":Number,exp:Math.exp,not:ti,length:ai,"!":ii,sign:Math.sign||ki},this.binaryOps={"+":_n,"-":Dn,"*":Mn,"/":Vn,"%":$n,"^":Math.pow,"||":jn,"==":Nn,"!=":Bn,">":Rn,"<":Ln,">=":Fn,"<=":zn,and:Gn,or:qn,in:Kn,"=":ci,"[":hi},this.ternaryOps={"?":ui},this.functions={random:ni,fac:ii,min:pi,max:di,hypot:Math.hypot||oi,pyt:Math.hypot||oi,pow:Math.pow,atan2:Math.atan2,if:ui,gamma:si,roundTo:li,map:fi,fold:mi,filter:vi,indexOf:gi,join:yi},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}Ei.prototype.parse=function(t){var e=[],n=new Pn(this,new En(this,t),{allowMemberAccess:this.options.allowMemberAccess});return n.parseExpression(e),n.expect(mn,"EOF"),new fn(e,this)},Ei.prototype.evaluate=function(t,e){return this.parse(t).evaluate(e)};var Ai=new Ei;Ei.parse=function(t){return Ai.parse(t)},Ei.evaluate=function(t,e){return Ai.parse(t).evaluate(e)};var Pi={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};Ei.prototype.isOperatorEnabled=function(t){var e=function(t){return Pi.hasOwnProperty(t)?Pi[t]:t}(t),n=this.options.operators||{};return!(e in n)||!!n[e]};var Oi=function(t){t=t.replace(/ /g,"");var e=/\(([^\(\)]|\(([^\(\)]|\(([^\(\)]|\(([^\(\)])*\))*\))*\))*\)/.exec(t);if(void 0===e)return{result:!1};var n=t.split(")");return{result:!0,unit:n[n.length-1],expression:e[0]}},Si=function(){function t(e){r(this,t),this.expressionProps=e}return a(t,[{key:"resize",value:function(t){var e=Oi(this.expressionProps.expression),n="(".concat(e.expression,"*").concat(t,")");return"".concat(R.mathExpPreface,"(").concat(n,")").concat(this.expressionProps.unit)}},{key:"calculateValues",value:function(t,e){for(var n,i=t.length,r=(new Ei).parse(this.expressionProps.expression),s=[],a=(o(n={},R.totalElements,i),o(n,R.initParams,e),n),u=0;u<i;u++){a[R.elementIndex]=u;try{var l=r.evaluate(a);if(null==l){at.error("".concat(this.expressionProps.expression," is not a valid mathematical expression. Returning 0")),s.push(0);continue}var c="".concat(l).concat(this.expressionProps.unit);"amount"===this.expressionProps.type&&(c=parseFloat(c)),s.push(c)}catch(t){at.error("".concat(this.expressionProps.expression," is not a valid mathematical expression. Returning 0")),s.push(0)}}return s}}]),t}();function Ti(t){t=t.replace(/ /g,"");return/^@stagger\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+))\)$/.test(t)}var _i=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t=t.replace(/ /g,""),e&&!Ti(t))return!1;var n=/.*\((.*)\).*/,i=n.exec(t)[1],r=i.split(",");return{start:r[0],end:r[1],startFraction:1*r[2]||0,easing:r[3]||"linear",mode:r[4]||"linear",reverse:"true"===r[5]}};var Di=function(){function t(e){r(this,t),this.staggerProps=e}return a(t,[{key:"resize",value:function(t){return this.staggerProps.from*=t,this.staggerProps.to*=t,!0===this.staggerProps.integer&&(this.staggerProps.from=Math.round(this.staggerProps.from),this.staggerProps.to=Math.round(this.staggerProps.to)),"@stagger(".concat(this.staggerProps.from).concat(this.staggerProps.unit,", ").concat(this.staggerProps.to).concat(this.staggerProps.unit,", ").concat(this.staggerProps.fraction||0,", ").concat(this.staggerProps.easing||"linear",", ").concat(this.staggerProps.mode||"linear",", ").concat(this.staggerProps.reverse||!1,")")}},{key:"calculateValues",value:function(t){for(var e,n,i,r,s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=[];if("linear"===n)for(var s=0;s<t;s++){var a=s/(t-1),o=a<e?a+1-e+1/(t-1):a-e;i&&(o=1-o),r.push(o)}else if("omni"===n)for(var u=1-e,l=0;l<t;l++){var c=Math.abs(l/(t-1)-e)/u;i&&(c=1-c),r.push(c)}return r}(t.length,this.staggerProps.fraction,this.staggerProps.mode,this.staggerProps.reverse),a=[],o=0;o<s.length;o++){var u=(e=this.staggerProps.from,n=this.staggerProps.to,i=s[o],(r=this.staggerProps.easing)||(r="linear"),Nt[r](i)*(n-e)+e);!0===this.staggerProps.integer&&(u=Math.round(u)),"measurement"===this.staggerProps.type&&(u+=this.staggerProps.unit),a.push(u)}return a}}]),t}(),Mi=Ti,Vi=new RegExp(/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,"gi"),$i=new RegExp(/^[-+]?\d+$/),ji=new Re({messages:{color:"The '{field}' field must be an a valid color! Actual: {actual}",measurement:"The '{field}' must be a measurement with specs that are not met. You've either provided wrong value/units or an invalid @ expression. Actual: {actual}"}});ji.add("amount",(function(t){var e=this,n=t.schema,i=function(t,n){return e.makeError({type:"amount",actual:t,messages:{amount:n}})};return{source:"\n      let startUnits, endUnits, startNumberPart, endNumberPart;\n      const staggerValidation = ".concat(Mi,";\n      const staggerAnalyser = ").concat(_i,';\n      const easingKeys = "').concat(Object.keys(Nt).join(","),"\".split(',');\n      const validateExpression = ").concat(Oi,";\n      const attributeRegexp = /^").concat(R.attibuteValue,"\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^").concat(R.patternValue,"\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = ").concat(X,";\n      const isNumeric = ").concat(F,"\n\n      if(typeof value === 'string' || value instanceof String){\n        if(value.trim().startsWith('").concat(R.staggerPreface,"')){\n          const staggerValid = staggerValidation(value);\n          if(staggerValid === false){\n            ").concat(i("value","The "+R.staggerPreface+" expression is invalid"),";\n            return;\n          } else {\n            const analysis = staggerAnalyser(value, false);\n            if(!isNumeric(analysis.start)){\n              ").concat(i("analysis.start","The provided start "+R.staggerPreface+" value is invalid"),";\n              return;\n            } else {\n              startNumberPart = analysis.start*1;\n              if(").concat(K(n,"min"),"){\n                if(").concat(n.min," > analysis.start){\n                 ").concat(i("analysis.start","The provided start "+R.staggerPreface+" value is smaller than the minimum accepted value ("+n.min+")"),";\n                  return;\n                }\n              }\n              if(").concat(K(n,"max"),"){\n                if(").concat(n.max," < analysis.start){\n                  ").concat(i("analysis.start","The provided start "+R.staggerPreface+" value is bigger than the maximum accepted value ("+n.max+")"),";\n                  return;\n                }\n              }\n               if(").concat(K(n,"integer"),"){\n                if(!analysis.start.match(").concat($i,")){\n                  ").concat(i("analysis.start","The provided start "+R.staggerPreface+" value is not an integer"),";\n                  return;\n                }\n              }\n            }\n\n            if(!isNumeric(analysis.end)){\n              ").concat(i("analysis.end","The provided end "+R.staggerPreface+" value is invalid"),";\n              return;\n            } else {\n              endNumberPart = analysis.end*1;\n              if(").concat(K(n,"min"),"){\n                if(").concat(n.min," > analysis.end){\n                  ").concat(i("analysis.end","The provided end "+R.staggerPreface+" value is smaller than the minimum accepted value ("+n.min+")"),";\n                  return;\n                }\n              }\n              if(").concat(K(n,"max"),"){\n                if(").concat(n.max," < analysis.end){\n                  ").concat(i("analysis.end","The provided end "+R.staggerPreface+" value is bigger than the maximum accepted value ("+n.max+")"),";\n                  return;\n                }\n              }\n               if(").concat(K(n,"integer"),"){\n                if(!analysis.end.match(").concat($i,")){\n                  ").concat(i("analysis.end","The provided end "+R.staggerPreface+" value is not an integer"),";\n                  return;\n                }\n              }\n            }\n\n            if(analysis.startFraction < 0 || analysis.startFraction > 1){\n              ").concat(i("analysis.startFraction","The "+R.staggerPreface+" fraction must be a number >=0 and <=1"),";\n              return;\n            }\n\n            if(easingKeys.indexOf(analysis.easing) < 0){\n              ").concat(i("analysis.startFraction","The provided "+R.staggerPreface+" easing is not recognised by the system"),";\n              return;\n            }\n\n            if(analysis.mode !== 'linear' && analysis.mode !== 'omni'){\n              ").concat(i("analysis.mode",R.staggerPreface+" mode can only be either linear or omni"),";\n              return;\n            }\n\n            if(analysis.reverse !== true && analysis.reverse !== false){\n              ").concat(i("analysis.reverse",R.staggerPreface+" reverse needs to be either true or false"),";\n              return;\n            }\n\n            return value;\n          }\n        } else if(value.trim().startsWith('").concat(R.patternValue,"')){\n          if(!patternRegexp.test(value.replace(/ /g, ''))){\n            ").concat(i("value","The "+R.patternValue+" expression is invalid"),";\n            return;\n          }\n          const patternValues = extractParenthesisAttrsAsArray(value);\n          for(let i=0; i<patternValues.length; i++){\n            const valToCheck = patternValues[i];\n            if(!isNumeric(valToCheck)){\n              ").concat(i("valToCheck","The provided value is not a number"),";\n              return;\n            } else {\n              if(").concat(K(n,"min"),"){\n                if(").concat(n.min," > valToCheck){\n                  ").concat(i("valToCheck","The provided value is smaller than the minimum accepted value ("+n.min+")"),";\n                  return;\n                }\n              }\n              if(").concat(K(n,"max"),"){\n                if(").concat(n.max," < valToCheck){\n                  ").concat(i("valToCheck","The provided start value is bigger than the maximum accepted value ("+n.max+")"),";\n                  return;\n                }\n              }\n               if(").concat(K(n,"integer"),"){\n                if(!valToCheck.match(").concat($i,")){\n                  ").concat(i("valToCheck","The provided value is not an integer"),";\n                  return;\n                }\n              }\n          }\n        }\n        return value;\n      }  else if(value.trim().startsWith('").concat(R.attibuteValue,"')){\n          if(!attributeRegexp.test(value)){\n            ").concat(i("value","The "+R.attibuteValue+" expression is invalid"),";\n            return;\n          }\n\n          return value;\n        } else if(value.trim().startsWith('").concat(R.mathExpPreface,"')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            ").concat(i("value","The "+R.expressionPreface+" expression is invalid"),';\n            return;\n          }\n          if(validity.unit !== ""){\n            ').concat(i("value","The "+R.expressionPreface+" expression includes units"),";\n            return;\n          }\n\n          return value;\n        }\n      }\n\n\n      if(typeof value !== 'number'){\n        ").concat(i("value","The provided value is not a number"),";\n        return;\n      }\n      if(").concat(K(n,"max"),"){\n        if(").concat(n.max," < value){\n          ").concat(i("value","The provided amount is bigger than the maximum accepted value"),";\n          return;\n        }\n      }\n      if(").concat(K(n,"min"),"){\n        if(").concat(n.min," > value){\n          ").concat(i("value","The provided amount is lower than the minimum accepted value"),";\n          return;\n        }\n      }\n      if(").concat(K(n,"integer"),"){\n        if(value !== parseInt(value, 10)){\n          ").concat(i("value","The provided amount is not an integer"),";\n          return;\n        }\n      }\n      return value;\n    ")}})),ji.add("measurement",(function(t){var e=this,n=t.schema,i=t.messages,r=function(t,n){return e.makeError({type:"measurement",actual:t,messages:{measurement:n}})},s=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)("+n.units.join("|")+")$","gi"),a=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");return{source:"\n      let startUnits, endUnits, startNumberPart, endNumberPart;\n      const staggerValidation = ".concat(Mi,";\n      const staggerAnalyser = ").concat(_i,';\n      const easingKeys = "').concat(Object.keys(Nt).join(","),"\".split(',');\n      const validateExpression = ").concat(Oi,";\n      const validUnits = ['").concat(n.units.join("','"),"'];\n      const attributeRegexp = /^").concat(R.attibuteValue,"\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^").concat(R.patternValue,"\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = ").concat(X,";\n\n      if(typeof value !== 'string' && !(value instanceof String)){\n        ").concat(r("value",null==i?void 0:i.measurement),"\n        return ;\n      }\n\n      if(value.trim().startsWith('").concat(R.attibuteValue,"')){\n        if(!attributeRegexp.test(value)){\n          ").concat(r("value","The "+R.attibuteValue+" expression is invalid"),";\n          return;\n        }\n\n        return value;\n      } else if(value.trim().startsWith('").concat(R.staggerPreface,"')){\n        const staggerValid = staggerValidation(value);\n        if(staggerValid === false){\n          ").concat(r("value","The "+R.staggerPreface+" expression is invalid"),";\n          return;\n        } else {\n          const analysis = staggerAnalyser(value, false);\n          if(!analysis.start.match(").concat(s,")){\n            ").concat(r("analysis.start","The provided start "+R.staggerPreface+" value is invalid"),";\n            return;\n          } else {\n            var numberPart = analysis.start.match(").concat(a,")[0];\n            startNumberPart = numberPart;\n            startUnits = analysis.start.toString().substring(numberPart.length);\n            if(").concat(K(n,"min"),"){\n              if(").concat(n.min," > numberPart){\n                ").concat(r("analysis.start","The provided start "+R.staggerPreface+" value is smaller than the minimum accepted value ("+n.min+")"),";\n                return;\n              }\n            }\n            if(").concat(K(n,"max"),"){\n              if(").concat(n.max," < numberPart){\n                ").concat(r("analysis.start","The provided start "+R.staggerPreface+" value is bigger than the maximum accepted value ("+n.max+")"),";\n                return;\n              }\n            }\n             if(").concat(K(n,"integer"),"){\n              if(!numberPart.match(").concat($i,")){\n                ").concat(r("analysis.start","The provided start "+R.staggerPreface+" value is not an integer"),";\n                return;\n              }\n            }\n          }\n\n          if(!analysis.end.match(").concat(s,")){\n            ").concat(r("analysis.end","The provided end "+R.staggerPreface+" value is invalid"),";\n            return;\n          } else {\n            var numberPart = analysis.end.match(").concat(a,")[0];\n            endNumberPart = numberPart;\n            endUnits = analysis.end.toString().substring(numberPart.length);\n            if(").concat(K(n,"min"),"){\n              if(").concat(n.min," > numberPart){\n                ").concat(r("analysis.end","The provided end "+R.staggerPreface+" value is smaller than the minimum accepted value ("+n.min+")"),";\n                return;\n              }\n            }\n            if(").concat(K(n,"max"),"){\n              if(").concat(n.max," < numberPart){\n                ").concat(r("analysis.end","The provided end "+R.staggerPreface+" value is bigger than the maximum accepted value ("+n.max+")"),";\n                return;\n              }\n            }\n             if(").concat(K(n,"integer"),"){\n              if(!numberPart.match(").concat($i,")){\n                ").concat(r("analysis.end","The provided end "+R.staggerPreface+" value is not an integer"),";\n                return;\n              }\n            }\n          }\n\n          if(startUnits !== endUnits){\n            ").concat(r("analysis.startFraction","The "+R.staggerPreface+" start and end must always have the same units"),";\n            return;\n          }\n\n          if(analysis.startFraction < 0 || analysis.startFraction > 1){\n            ").concat(r("analysis.startFraction","The "+R.staggerPreface+" fraction must be a number >=0 and <=1"),";\n            return;\n          }\n\n          if(easingKeys.indexOf(analysis.easing) < 0){\n            ").concat(r("analysis.startFraction","The provided "+R.staggerPreface+" easing is not recognised by the system"),";\n            return;\n          }\n\n          if(analysis.mode !== 'linear' && analysis.mode !== 'omni'){\n            ").concat(r("analysis.mode",R.staggerPreface+" mode can only be either linear or omni"),";\n            return;\n          }\n\n          if(analysis.reverse !== true && analysis.reverse !== false){\n            ").concat(r("analysis.reverse",R.staggerPreface+" reverse needs to be either true or false"),";\n            return;\n          }\n\n          return value;\n        }\n      } else if(value.trim().startsWith('").concat(R.patternValue,"')){\n        if(!patternRegexp.test(value.replace(/ /g, ''))){\n          ").concat(r("value","The "+R.patternValue+" expression is invalid"),";\n          return;\n        }\n        const patternValues = extractParenthesisAttrsAsArray(value);\n        for(let i=0; i<patternValues.length; i++){\n          const valToCheck = patternValues[i];\n          if(!valToCheck.match(").concat(s,")){\n            ").concat(r("valToCheck","The provided value is invalid"),";\n            return;\n          } else {\n            var numberPart = valToCheck.match(").concat(a,")[0];\n            if(").concat(K(n,"min"),"){\n              if(").concat(n.min," > numberPart){\n                ").concat(r("valToCheck","The provided value is smaller than the minimum accepted value ("+n.min+")"),";\n                return;\n              }\n            }\n            if(").concat(K(n,"max"),"){\n              if(").concat(n.max," < numberPart){\n                ").concat(r("valToCheck","The provided value is bigger than the maximum accepted value ("+n.max+")"),";\n                return;\n              }\n            }\n             if(").concat(K(n,"integer"),"){\n              if(!numberPart.match(").concat($i,")){\n                ").concat(r("valToCheck","The provided value is not an integer"),";\n                return;\n              }\n            }\n          }\n        }\n        return value;\n      } else if(value.trim().startsWith('").concat(R.mathExpPreface,"')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            ").concat(r("value","The "+R.expressionPreface+" expression is invalid"),";\n            return;\n          } else {\n            if(validUnits.indexOf(validity.unit) < 0){\n              ").concat(r("value","The "+R.expressionPreface+" expression has non-supported units"),";\n              return;\n            }\n\n            return value;\n          }\n        }\n\n\n      if(!value.match(").concat(s,")){\n        ").concat(r("value",null==i?void 0:i.measurement),"\n      } else {\n        var numberPart = value.match(").concat(a,")[0];\n        if(").concat(K(n,"min"),"){\n          if(").concat(n.min," > numberPart){\n            ").concat(r("value",null==i?void 0:i.measurement),"\n          }\n        }\n        if(").concat(K(n,"max"),"){\n          if(").concat(n.max," < numberPart){\n            ").concat(r("value",null==i?void 0:i.measurement),"\n          }\n        }\n         if(").concat(K(n,"integer"),"){\n          if(!numberPart.match(").concat($i,")){\n            ").concat(r("value",null==i?void 0:i.measurement),"\n          }\n        }\n      }\n      return value;\n    ")}})),ji.add("html",(function(t,e,n){t.schema;var i=t.messages;return{source:"\n      if(value === null){\n        ".concat(this.makeError({type:"html",actual:"value",messages:i}),"\n      } else {\n        return value;\n      }\n    ")}})),ji.add("css",(function(t,e,n){t.schema;var i=t.messages;return{source:"\n      if(value === null){\n        ".concat(this.makeError({type:"css",actual:"value",messages:i}),"\n      } else {\n        return value;\n      }\n    ")}}));var Ni=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];ji.add("color",(function(t,e,n){t.schema;var i=t.messages;return{source:'\n      var colors = "'.concat(Ni.join(","),"\".split(',')\n      if(typeof value !== 'string' && !(value instanceof String)){\n        ").concat(this.makeError({type:"measurement",actual:"value",messages:i}),"\n        return ;\n      }\n      if(!value.match(").concat(Vi,") && !colors.includes(value.toLowerCase())){\n        ").concat(this.makeError({type:"color",actual:"value",messages:i}),"\n      }\n      return value;\n    ")}}));var Bi=["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","%"],Ri=[{type:"string",optional:!0,default:"linear",enum:["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]},{type:"array",optional:!0,length:4,items:{type:"number"}}],Li={type:"string",empty:!1,trim:!0,optional:!0},Fi={type:"string",empty:!1,trim:!0,optional:!0},zi={type:"string",empty:!1,optional:!1},Gi={type:"amount",optional:!1,integer:!0,min:0},qi={type:"amount",optional:!0,integer:!0,min:0},Ki={type:"amount",integer:!0,min:1,optional:!0},Ji={type:"amount",integer:!0,min:0,optional:!0},Wi={type:"amount",integer:!0,min:0,optional:!0},Hi={type:"html",optional:!0},Ui={type:"css",optional:!0},Zi={type:"array",optional:!0,items:{type:"object",props:{type:"string",src:"string"}}},Qi={type:"array",items:{type:"object",strict:!0,props:{src:"string",id:"string",mcid:{type:"string",optional:!0},classes:{type:"array",optional:!0,items:"string"},base64:{type:"boolean",optional:!0},startValues:{optional:!0,type:"object",props:{gain:{optional:!0,type:"number"},pan:{optional:!0,type:"number"}}}}},optional:!0},Xi=ji.compile({id:Li,name:Fi,selector:n(n({},zi),{},{optional:!0}),easing:Ri,duration:Gi,startFrom:{type:"amount",integer:!0,min:0,optional:!0},repeats:Ki,hiatus:Ji,delay:Wi}),Yi={type:"object",optional:!0,props:{width:{type:"measurement",units:Bi,optional:!0},height:{type:"measurement",units:Bi,optional:!0}}},tr={type:"string",enum:["on","off","only"],optional:!0},er=ji.compile({props:[{type:"object",strict:!0,props:{id:Li,name:Fi,selector:n(n({},zi),{},{optional:!0}),repeats:Ki,hiatus:Ji,delay:Wi,easing:Ri,duration:qi,html:Hi,css:Ui,audioSources:Qi,audio:tr,containerParams:Yi,fonts:Zi,initParams:{type:"object",optional:!0}}},{type:"object",strict:!0,props:{id:Li,name:Fi,host:{type:"any",optional:!1},duration:qi,html:Hi,css:Ui,audioSources:Qi,audio:tr,containerParams:Yi,fonts:Zi,initParams:{type:"object",optional:!0}}},{type:"object",strict:!0,props:{root:{type:"boolean",optional:!0},name:Fi,id:Li,audioSources:Qi,audio:n(n({},tr),{},{enum:["on"]})}}]}),nr=ji.compile({selector:n(n({},zi),{},{optional:!0,strict:!0}),name:Fi}),ir=ji.compile({selector:n(n({},zi),{},{strict:!0,optional:!0}),name:Fi,repeats:{type:"amount",integer:!0,min:1,optional:!0},hiatus:{type:"amount",integer:!0,min:0,optional:!0},delay:{type:"amount",integer:!0,min:0,optional:!0}});function rr(t){var e=new t.Class(t.attrs,t.props);if(!1===e.result)return e;if(K(t,"incidents"))for(var n in t.incidents){var i=t.incidents[n],r=rr(i.leaf);if(!1===r.result)return r;var s=e.addIncident(r,i.position);if(!1===s.result)return s}return e}function sr(t){t.descriptor.value=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.exportLiveDefinition();for(var i in t)Gt(i,t[i],!0,"attrs",n);for(var r in e)Gt(r,e[r],!0,"props",n);return rr(n)}}ji.compile({selector:zi,duration:Gi});var ar="mc.descriptive.decisionAuthority";function or(t){t.descriptor.value=function(t){if(null!==this.constructor.attrsValidationRules){var e=this.constructor.attrsValidationMethod(t);if(e.length>0)return{result:!1,errors:e}}return!0===this.putMessageOnPipe("checkForClip",{},ar,{selfExecute:!0,direction:ht}).response?this.manageEditAttrProps(t,"attrs"):(this.attrs=t,{result:!0})}}function ur(t){t.descriptor.value=function(t){var e=ot(t,this.constructor.propsValidationRules,this.constructor);return e.result?!0===this.putMessageOnPipe("checkForClip",{},ar,{selfExecute:!0,direction:ht}).response?this.manageEditAttrProps(t,"props"):(this.props=t,{result:!0}):e}}function lr(t){t.descriptor.value=function(){return null!==this.props.host&&void 0!==this.props.host?[this.props.host]:this.hasParent&&this.putMessageOnPipe("checkForClip",{},ar,{selfExecute:!0,direction:ht}).response?this.putMessageOnPipe("getElements",{selector:this.selector()},ar,{selfExecute:!1,direction:ht}).response:[]}}function cr(t){t.descriptor.value=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{check:!0};if("dynamic"===this.duration)return{result:!1,reason:"Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable"};if(t===this.duration)return{result:!0,meta:{unprocessed:!0}};if(t<=0)return{result:!1,reason:"Size must always be > 0"};if(e.check&&this.hasParent){var n=this.putMessageOnPipe("checkResize",{id:this.id,newSize:t,fraction:t/this.duration},ar,{selfExecute:!1,direction:ht});if(!n.response.result)return n.response}return this.setNewDuration(t),{result:!0}}}function hr(t){t.descriptor.value=function(){return null===this.inheritedSelector?K(this.props,"selector")?this.props.selector:null:K(this.props,"selector")?"&"===this.props.selector.charAt(0)?this.inheritedSelector+this.props.selector.substring(1):"".concat(this.inheritedSelector," ").concat(this.props.selector):this.inheritedSelector}}var dr=function(){function t(e){r(this,t),this.expressionProps=e}return a(t,[{key:"calculateValues",value:function(t){for(var e=[],n=0;n<t.length;n++){var i=t[n].getAttribute(this.expressionProps.attribute);F(i)&&(i=parseFloat(i)),e.push(i)}return e}}]),t}(),pr=function(){function t(e){r(this,t),this.patternProps=e}return a(t,[{key:"calculateValues",value:function(t){for(var e=this.patternProps.pattern.length,n=[],i=0;i<t.length;i++)n.push(this.patternProps.pattern[i%e]);return n}},{key:"resize",value:function(t){if("amount"!==this.patternProps.type)return"".concat(R.patternValue,"(").concat(this.patternProps.pattern.join(),")");for(var e=[],n=0;n<this.patternProps.pattern.length;n++)e.push(t*this.patternProps.pattern[n]);return"".concat(R.patternValue,"(").concat(e.join(),")")}}]),t}(),fr=function t(e){return r(this,t),"expression"===e.dynamicType?new Si(e):"stagger"===e.dynamicType?new Di(e):"attribute"===e.dynamicType?new dr(e):"pattern"===e.dynamicType?new pr(e):(at.error('dynamicType must be either "stgger" or "expression". '.concat(e.dynamicType," provided")),!1)};function mr(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];for(var n=[],i=0,r=Object.entries(t);i<r.length;i++){var s=y(r[i],2),a=s[0],o=s[1];if(!(o instanceof Element))if(G(o)){var u=mr(o,"".concat(e).concat(""===e?"":".").concat(a));n.push.apply(n,k(u))}else if(z(o)){var l=o.trim();if(l.startsWith(R.staggerPreface)){var c=_i(l,!1),h=c.start.match(W)[0],d=c.end.match(W)[0],p=c.start.toString().substring(h.length),f={dynamicType:"stagger",path:"".concat(e).concat(""===e?"":".").concat(a),from:1*h,to:1*d,mode:c.mode,unit:p,fraction:c.startFraction,easing:c.easing,reverse:c.reverse,type:""===p?"amount":"measurement"};n.push(f)}else if(l.startsWith(R.attibuteValue)){var m={dynamicType:"attribute",path:"".concat(e).concat(""===e?"":".").concat(a),unit:"",type:"measurement",attribute:/\(([^)]+)\)/.exec(l)[1]};n.push(m)}else if(l.startsWith(R.mathExpPreface)){var v=Oi(l),g={dynamicType:"expression",path:"".concat(e).concat(""===e?"":".").concat(a),unit:v.unit,type:""===v.unit?"amount":"measurement",expression:v.expression};n.push(g)}else if(l.startsWith(R.patternValue)){for(var b=X(l),x=!0,C=[],I=0;I<b.length;I++){if(!F(b[I])){x=!1;break}C.push(parseFloat(b[I]))}x&&(b=C);var w={dynamicType:"pattern",path:"".concat(e).concat(""===e?"":".").concat(a),unit:"",type:x?"amount":"measurement",pattern:b};n.push(w)}}}return n}function vr(t){t.descriptor.value=function(){for(var t=mr(this.props),e=0;e<t.length;e++)this.propsStaggers.push({path:t[e].path,stagger:new fr(t[e])});for(var n=mr(this.attrs),i=0;i<n.length;i++)this.attributesStaggers.push({path:n[i].path,stagger:new fr(n[i])})}}var gr=P(null,(function(t,e){var n=function(e){u(i,e);var n=p(i);function i(){var e,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r(this,i),null===a?(e=n.call(this,s),t(h(e)),e.attrs={},e.props=s):(e=n.call(this,a),t(h(e)),e.attrs=s,e.props=a);var o=ot(e.props,nr,e.constructor);return o.result?(e._inheritedSelector=null,e.attributesStaggers=[],e.propsStaggers=[],e.setupDynamicValues(),e.passiveAddition=!0,e._buildTree(),e.passiveAddition=!1,d(e)):d(e,o)}return i}(e);return{F:n,d:[{kind:"field",static:!0,key:"Incident",value:function(){return xt}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"motor-cortex-js"}},{kind:"field",static:!0,key:"version",value:function(){return Wt}},{kind:"field",static:!0,key:"Channel",value:function(){return ct}},{kind:"field",static:!0,key:"ClassName",value:function(){return"Group"}},{kind:"field",static:!0,key:"isGroup",value:function(){return!0}},{kind:"field",static:!0,key:"attrsValidationRules",value:function(){return null}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return nr}},{kind:"method",decorators:[or],key:"editAttributes",value:function(){}},{kind:"method",decorators:[ur],key:"editProperties",value:function(){}},{kind:"method",decorators:[cr],key:"resize",value:function(){}},{kind:"method",decorators:[sr],key:"clone",value:function(){}},{kind:"method",decorators:[hr],key:"selector",value:function(){}},{kind:"method",decorators:[lr],key:"getElements",value:function(){}},{kind:"method",decorators:[vr],key:"setupDynamicValues",value:function(){}},{kind:"method",key:"_buildTree",value:function(){this.buildTree()}},{kind:"method",key:"_calculateDuration",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=0;for(var n in this.children){var i=this.children[n];if(!0===t&&!0===i.leaf.constructor.isGroup&&i.leaf._calculateDuration(!0),"dynamic"===i.leaf.duration){e="dynamic";break}i.position+i.leaf.duration>e&&(e=i.position+i.leaf.duration)}return e!==this.calculatedDuration&&(this.calculatedDuration=e,!0)}},{kind:"method",key:"_rebuildTree",value:function(){for(var t in this.children){var e=this.children[t];!0===e.leaf.passive&&this.removeIncident(e.id)}this.passiveAddition=!0,this.buildTree(),this.passiveAddition=!1}},{kind:"method",key:"buildTree",value:function(){}},{kind:"get",key:"duration",value:function(){return"dynamic"===this.calculatedDuration?this.calculatedDuration:m(l(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){g(l(n.prototype),"duration",t,this,!0)}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){var n=this.parentNode,i=n.getLeafPosition(this.id),r=JSON.parse(JSON.stringify(this[e]));this[e]=t,n.removeIncident(this.id),this._rebuildTree();var s=n.addIncident(this,i);return s.result||(this[e]=r,this._rebuildTree(),n.addIncident(this,i)),s}},{kind:"method",key:"detachFromParent",value:function(){m(l(n.prototype),"detachFromParent",this).call(this),this.inheritedSelector=null}},{kind:"get",key:"inheritedSelector",value:function(){return this._inheritedSelector}},{kind:"set",key:"inheritedSelector",value:function(t){for(var e in this._inheritedSelector=t,this.children){this.children[e].leaf.inheritedSelector=this.selector()}}},{kind:"get",key:"selectorToPassToChildren",value:function(){return this.selector()}},{kind:"method",key:"exportDefinition",value:function(){var t={ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:this.attrs,props:this.props,incidents:{},duration:this.duration};for(var e in this.children){var n=this.children[e];!0!==n.leaf.passive&&(t.incidents[e]={id:n.id,position:n.position,leaf:n.leaf.exportDefinition()})}return t}},{kind:"method",key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=JSON.parse(JSON.stringify(this.props));!1===t&&delete e.id;var n={Class:this.constructor,attrs:JSON.parse(JSON.stringify(this.attrs)),props:e,incidents:{}};for(var i in this.children){var r=this.children[i];!0!==r.leaf.passive&&(n.incidents[i]={position:r.position,leaf:r.leaf.exportLiveDefinition(t)})}return n}},{kind:"method",key:"addIncident",value:function(t,e){var i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{check:!0};if(t.inheritedSelector=this.selectorToPassToChildren,!0===r.check){var s=m(l(n.prototype),"checkAddition",this).call(this,t,e);if(!s.result)return t.inheritedSelector=null,s;if(!0===(i=this.putMessageOnPipe("checkForClip",{},ar,{selfExecute:!0,direction:ht})).response){var a=t.putMessageOnPipe("checkForInvalidSelectors",{},null,{selfExecute:!0,direction:dt});if(a.length>0){for(var o=[],u=0;u<a.length;u++)o.push(a[u].response);return{result:!1,errors:o}}}var c=this.putMessageOnPipe("checkAddition",{incident:t,millisecond:e,parentGroupId:this.id},ar,{selfExecute:!0,direction:ht});if(!c.response.result)return t.inheritedSelector=null,c.response}!0===this.passiveAddition&&(t.passive=!0);var h=this.addChild(t,e);return h.result||(t.inheritedSelector=null),"dynamic"===t.duration&&i&&this._calculateDuration(!0),h}},{kind:"method",key:"moveIncident",value:function(t,e){var i=t;G(t)&&(i=t.id);var r=m(l(n.prototype),"checkEditPosition",this).call(this,i,e);if(!r.result)return r;var s=e-this.getLeafPosition(i);if(0===s)return{result:!0};var a=this.putMessageOnPipe("checkMove",{id:i,millisecond:e,positionDelta:s,parentGroupId:this.id},ar,{selfExecute:!0,direction:ht});return a.response.result?this.editPosition(i,e):a.response}},{kind:"method",key:"removeIncident",value:function(t){var e=t;G(t)&&(e=t.id);var i=m(l(n.prototype),"checkRemoveChild",this).call(this,e);if(!i.result)return i;var r=this.putMessageOnPipe("checkDeletion",{id:e,parentGroupId:this.id},ar,{selfExecute:!0,direction:ht});return r.response.result?this.removeChild(e):r.response}},{kind:"method",key:"handleCheckForClip",value:function(t,e){return!!this.hasParent&&this.bypass()}},{kind:"method",key:"handleCheckAddition",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckMove",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckDeletion",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckResize",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleSetDurationDynamic",value:function(t,e){this.calculatedDuration="dynamic",this.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:ht})}}]}}),yt),yr="-",kr={isCombo:function(t){return t.incidentClass.isCombo},getItem:function(t,e){return qt(e.join("."),"attrs",t)},getRepeatPosition:function(t,e,n,i){return i*(e||0)+(i+1)*(t||0)+i*n},refersToOwnSelector:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=e;!1===Array.isArray(e)&&(i=e.split("."));var r=this.getItem(t,i.slice(0,2+n));return(""===r.props.selector||void 0===r.props.selector||null===r.props.selector)&&("props"===i[2]||(!this.isCombo(r)||this.refersToOwnSelector(t,i,n+3)))},cascadeSelectors:function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=[],r=0;r<e.length;r++){var s=e[r],a=void 0;if(a=K(s.props,"selector")?"".concat(t," ").concat(s.props.selector):t,i.push({path:"".concat(n).concat(""===n?"":".").concat(r,".props.selector"),value:a}),this.isCombo(s)){var o=this.cascadeSelectors(a,s.attrs.incidents,"".concat(n).concat(""===n?"":".").concat(r,".attrs.incidents"));i=i.concat(o)}}return i},createDescriptiveIncidentLikeObject:function(t,e,n,i,r){return{constructor:{Incident:t.incidentClass.targetClass.Incident,plugin_npm_name:t.incidentClass.targetClass.plugin_npm_name,Channel:t.incidentClass.targetClass.Channel,isClip:!1},attrs:i||t.attrs,props:r||t.props,selector:function(){return t.props.selector},id:t.props.id,audioClip:null,audio:"no",dynamicDurationValue:null,putMessageOnPipe:function(){},attributesStaggers:e,propsStaggers:n}},parseElementsDynamics:function(t,e,n,i,r){for(var s="incidents.".concat(r,".attrs"),a="incidents.".concat(r,".props"),o=Jt(e),u=Jt(n),l=0;l<t.length;l++)if(0===t[l].path.indexOf(s)){var c=t[l].path.substring(s.length+1);o.setValue(c,t[l].values[i])}else if(0===t[l].path.indexOf(a)){var h=t[l].path.substring(a.length+1);u.setValue(h,t[l].values[i])}return{incidentAttrs:o.exportFlattened(),incidentProps:u.exportFlattened()}},getStaggersForChild:function(t,e,n){for(var i=[],r=[],s=0;s<t.length;s++)"position"===n&&0===t[s].path.indexOf("incidents.".concat(e,".").concat(n))?r.push({path:"position",stagger:t[s].stagger}):0===t[s].path.indexOf("incidents.".concat(e,".").concat(n))?r.push({path:t[s].path.substring("incidents.".concat(e,".").concat(n).length+1),stagger:t[s].stagger}):i.push(t[s]);return{identifiedDynamics:r,remainingDynamics:i}},createElementProxy:function(t,e,n,i,r){for(var s=Jt(t),a=this.cascadeSelectors(e,t.attrs.incidents,"attrs.incidents"),o=0;o<i.length;o++)s.setValue("attrs.".concat(i[o].path),i[o].values[n]);for(var u=0;u<r.length;u++)s.setValue("props.".concat(r[u].path),r[u].values[n]);for(var l=0;l<a.length;l++)s.setValue(a[l].path,a[l].value);return s}},br=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"parseAttrsDynamicValues",value:function(t,e){this.childrenStaggers=[];for(var n=0;n<t.attributesStaggers.length;n++)kr.refersToOwnSelector(t,t.attributesStaggers[n].path)?this.staggerAttrs.push({path:t.attributesStaggers[n].path,values:t.attributesStaggers[n].stagger.calculateValues(e,this.initParams)}):this.childrenStaggers.push(t.attributesStaggers[n])}},{key:"handleRecalcDuration",value:function(t,e){var i=m(l(n.prototype),"handleRecalcDuration",this).call(this,t,e);return this.descriptiveIncident.dynamicDurationValue=1*this.duration,i}},{key:"lastWish",value:function(){this.descriptiveIncident.dynamicDurationValue=null,this.descriptiveIncident.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:ht}),m(l(n.prototype),"lastWish",this).call(this)}},{key:"_createElementIncident",value:function(t,e,n,i,r,s){for(var a=this,o=kr.createElementProxy(e,n.context.getElementSelectorByMCID(s),i,this.staggerAttrs,this.staggerProps),u=0;u<this.staggerAttrs.length;u++)o.setValue("attrs.".concat(this.staggerAttrs[u].path),this.staggerAttrs[u].values[i]);for(var l=jt({id:"".concat(this.id,"_element").concat(yr).concat(i),attrs:{},props:{},Incident:gr.Incident,plugin_npm_name:gr.plugin_npm_name,Channel:gr.Channel,DescriptiveIncident:new gr}),c=function(t){var e=jt({id:"".concat(a.id,"_element").concat(yr).concat(i,"_repeat").concat(yr).concat(t),attrs:{},props:{},Incident:gr.Incident,plugin_npm_name:gr.plugin_npm_name,Channel:gr.Channel,DescriptiveIncident:new gr}),s=a.childrenStaggers;o.attrs.incidents.forEach((function(u,l){var c=kr.parseElementsDynamics(a.staggerAttrs,u.attrs,u.props,i,l),h=c.incidentAttrs,d=c.incidentProps,p=kr.getStaggersForChild(s,l,"attrs"),f=kr.getStaggersForChild(p.remainingDynamics,l,"props"),m=kr.getStaggersForChild(p.remainingDynamics,l,"position");s=f.remainingDynamics,o.setValue("attrs.incidents.".concat(l,".props.id"),"".concat(a.id,"_element").concat(yr).concat(i,"_repeat").concat(yr).concat(t,"_incident").concat(yr).concat(l));var v=xr(kr.createDescriptiveIncidentLikeObject(u,p.identifiedDynamics,f.identifiedDynamics,h,d),n),g=u.position;1===m.identifiedDynamics.length&&(g=m.identifiedDynamics[0].stagger.calculateValues(new Array(r),a.initParams)[i]),e.addChild(v,g)})),l.addChild(e,kr.getRepeatPosition(o.props.delay,o.props.hiatus,e.duration,t))},h=0;h<(o.props.repeats||1);h++)c(h);this.addChild(l,0)}}]),n}(Ft);function xr(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(i&&"off"===t.audio||!i&&"only"===t.audio)return null;if(K(t.props,"selector")&&(!i&&"~"===t.props.selector.charAt(0)||i&&"~"!==t.props.selector.charAt(0)&&!t.constructor.isClip))return null;if(t.constructor.isClip){if(!K(t.props,"selector")||i)return i?t.audioClip:t.realClip;(n=new zt(t,e)).plugin_channel_class=ct}else if(t.constructor.isCombo)n=new br(t,e);else if(t.constructor.isGroup)for(var r in n=jt({id:t.id,attrs:t.attrs,props:t.props,Incident:t.constructor.Incident,plugin_npm_name:t.constructor.plugin_npm_name,Channel:t.constructor.Channel,DescriptiveIncident:t}),t.children){var s=xr(t.children[r].leaf,e);null!==s&&n.addChild(s,t.children[r].position)}else n=new Ft(t,e);return n}var Cr="@kissmybutton/self-contained-incidents";function Ir(t){return function(){for(var e=0;e<t.length;e++)t[e]()}}var wr=function(t){u(n,t);var e=p(n);function n(t,i){var s;return r(this,n),(s=e.call(this,t,i)).attrs=t,s.props=i,s.isTheClip=!0,s.blockingWaitings={},s.instantiatedChannels={},s.isHostedClip=!0,s.instantiatedCopiesContexts={},s.instantiatedCopiesUnblockingMethods=[],s.onClipInitialise(),s.runTimeInfo=s.props.runTimeInfo,s.durationSubs=[],s.audioClip=!1,s}return a(n,[{key:"contextReady",get:function(){return this.context.contextLoaded}},{key:"onClipInitialise",value:function(){}},{key:"contextLoading",value:function(){this.context.contextLoaded=!1}},{key:"contextLoaded",value:function(){for(var t in this.context.contextLoaded=!0,this.putMessageOnPipe("contextLoaded",{},{},{selfExecute:!1,direction:dt}),this.instantiatedChannels)this.instantiatedChannels[t].recalcScratchValues();for(var e=0;e<this.instantiatedCopiesUnblockingMethods.length;e++)this.instantiatedCopiesUnblockingMethods[e]();this.unblock()}},{key:"getElements",value:function(t){if(null!==this.props.host&&void 0!==this.props.host)return this.context.getElements(t);var e=[];for(var n in this.instantiatedCopiesContexts)for(var i=this.instantiatedCopiesContexts[n].getElements(t),r=0;r<i.length;r++)e.push(i[r]);return e}},{key:"addContext",value:function(t){this.instantiatedCopiesContexts[t.clipId]=t.context,t.instantiatedCopiesContexts=this.instantiatedCopiesContexts,this.instantiatedCopiesUnblockingMethods.push(t.unblock);var e=this.putMessageOnPipe("addContext",t,{},{selfExecute:!1,direction:dt});if(1===Object.keys(this.instantiatedCopiesContexts).length){for(var n in this.instantiatedChannels)this.instantiatedChannels[n].recalcScratchValues(t.clipId);this.context.nonFragmentedContext=t.context}return e}},{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:this.props}}},{key:"_resize",value:function(t){for(var e in this.instantiatedChannels)this.instantiatedChannels[e]._resize(t);this.setNewDuration(this.duration*t);for(var n=0;n<this.durationSubs.length;n++)this.durationSubs[n](this.duration)}},{key:"addIncident",value:function(t){for(var e=this,n=this.putMessageOnPipe("addIncident",{incident:t.incident,millisecond:t.millisecond,parentGroupId:t.parentGroupId,incidentFromDescription:xr,contextData:{clipId:this.id,context:this.context,instantiatedCopiesContexts:this.instantiatedCopiesContexts},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:dt}),i={},r=0;r<n.length;r++){var s=n[r].response.getIncidentsByChannel(n[r].positionDelta+t.millisecond);for(var a in s){var o;K(i,a)||(i[a]=[]),(o=i[a]).push.apply(o,k(s[a]))}}var u=this.checkAddition(i);if(u.result){return{result:!0,execute:function(){u.execute();for(var i=0;i<n.length;i++)for(var r in n[i].responder.addChild(n[i].response,t.millisecond),n[i].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht}),e.instantiatedCopiesContexts)n[i].responder.putMessageOnPipe("addContext",{clipId:r,context:e.instantiatedCopiesContexts[r]},"ContextAwareIncidents",{selfExecute:!1,direction:dt});e._calculateDuration()}}}return u}},{key:"checkAddition",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all-or-nothing",n=!0,i=[],r=[];for(var s in t){K(this.instantiatedChannels,s)||(this.instantiatedChannels[s]=new t[s][0].incident.plugin_channel_class({runTimeInfo:this.runTimeInfo,context:this.context,subscribe:this.props.subscribe}));var a=this.instantiatedChannels[s].addIncidents(t[s],e);n=n&&a.result,a.result?r.push(a.execute):i=i.concat(a.errors)}return{result:n,errors:i,execute:Ir(r)}}},{key:"moveIncident",value:function(t){for(var e=this.putMessageOnPipe("moveIncident",{incidentId:t.id,millisecond:t.millisecond,parentGroupId:t.parentGroupId,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:dt}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel(e[i].positionDelta+t.millisecond);for(var s in r){var a;K(n,s)||(n[s]=[]),(a=n[s]).push.apply(a,k(r[s]))}}var o=this.checkMove(n,t.positionDelta);if(o.result){return{result:!0,execute:function(){o.execute();for(var n=0;n<e.length;n++)e[n].responder.editPosition(e[n].response.id,t.millisecond),e[n].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht})}}}return o}},{key:"checkMove",value:function(t,e){var n=!0,i=[],r=[];for(var s in t){var a=this.instantiatedChannels[s].editIncidents(t[s],e);n=n&&a.result,a.result?r.push(a.execute):i=i.concat(a.errors)}return{result:n,errors:i,execute:Ir(r)}}},{key:"removeIncident",value:function(t){for(var e=this.putMessageOnPipe("removeIncident",{incidentId:t.id,parentGroupId:t.parentGroupId,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:dt}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel();for(var s in r){var a;K(n,s)||(n[s]=[]),(a=n[s]).push.apply(a,k(r[s]))}}var o=this.checkDelete(n);if(o.result){return{result:!0,execute:function(){o.execute();for(var t=0;t<e.length;t++)e[t].responder.removeChild(e[t].response.id),e[t].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht})}}}return o}},{key:"checkDelete",value:function(t){var e=!0,n=[],i=[];for(var r in t){var s=this.instantiatedChannels[r].removeIncidents(t[r]);e=e&&s.result,s.result?i.push(s.execute):n=n.concat(s.errors)}return{result:e,errors:n,execute:Ir(i)}}},{key:"resizeIncident",value:function(t){for(var e=this.putMessageOnPipe("resize",{incidentId:t.id,newSize:t.newSize,fraction:t.fraction,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.id,{selfExecute:!1,direction:dt}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel(e[i].positionDelta);for(var s in r){var a;K(n,s)||(n[s]=[]),(a=n[s]).push.apply(a,k(r[s]))}}var o=0;e.length>0&&(o=e[0].positionDelta);var u=this.checkResize(t.fraction,n,o);if(u.result){return{result:!0,execute:function(){u.execute();for(var n=0;n<e.length;n++)e[n].responder.setNewDuration(t.newSize)}}}return u}},{key:"checkResize",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=!0,r=[],s=[];for(var a in e){var o=ut(e[a],t,n),u=this.instantiatedChannels[a].checkResizedIncidents(o);i&&(i=u.result),u.result?s.push(u.execute):r=r.concat(u.errors)}return{result:i,errors:r,execute:Ir(s)}}},{key:"context",get:function(){var t,e;return null!==(e=(t=this.ownContext).contextLoaded)&&void 0!==e||(t.contextLoaded=!0),this.ownContext}},{key:"getIncidentsByChannel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e={};return e[Cr]=[{millisecond:t,incident:this,id:this.id}],e}},{key:"setVolume",value:function(t){this.volume=parseFloat(t)}},{key:"_onGetContextOnce",value:function(t){}},{key:"handleRecalcDuration",value:function(t,e){if(this._calculateDuration())for(var n=0;n<this.durationSubs.length;n++)this.durationSubs[n](this.duration);return!0}},{key:"onProgress",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!1!==this.contextReady){for(var r in n||(n=this.id),this.instantiatedChannels){var s=this.instantiatedChannels[r];s.moveTo(this.runTimeInfo.currentMillisecond,e,n,i)}this.onAfterProgress(t,e)}else this.setBlock()}},{key:"onAfterProgress",value:function(t,e){}},{key:"flash",value:function(){for(var t in this.instantiatedChannels){this.instantiatedChannels[t].moveTo(0,this.runTimeInfo.currentMillisecond,this.id,!0)}}},{key:"subscribeToDurationChange",value:function(t){this.durationSubs.push(t)}},{key:"handleSetBlockingWaiting",value:function(t,e){}},{key:"handleRemoveBlockingWaiting",value:function(t,e){}}]),n}(xt),Er=function(){function t(){r(this,t),this.output=L.createGain(),this.gainNode=L.createGain(),L.createStereoPanner&&(this.pannerNode=L.createStereoPanner()),L.createStereoPanner?(this.pannerNode.connect(this.gainNode),this.gainNode.connect(this.output),this.input=this.pannerNode):(this.gainNode.connect(this.output),this.input=this.gainNode)}return a(t,[{key:"connect",value:function(t){this.output.connect(t)}},{key:"disconnect",value:function(){this.output.disconnect()}}]),t}();function Ar(t){for(var e=window.atob(t),n=e.length,i=new Uint8Array(n),r=0;r<n;r++)i[r]=e.charCodeAt(r);return i.buffer}var Pr=/\[data(-mcid="+\w+")+\]/g,Or=function(){function t(){r(this,t),this.subscribers=[]}return a(t,[{key:"sub",value:function(t,e){this.subscribers.push(e)}},{key:"pub",value:function(t){for(var e=0;e<this.subscribers.length;e++)this.subscribers[e](t)}}]),t}(),Sr=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;r(this,t),this.totalSources=n.length,this.audioSources={},this.elementsByMCID={};for(var s=function(t){var r=n[t],s={mcid:r.mcid||nt(),id:r.id,src:r.src,classes:r.classes||[],base64:r.base64||!1,pubSub:new Or,soundLoaded:!1,startValues:r.startValues||{}};if(e.audioSources[s.id]=s,e.elementsByMCID[s.mcid]=s,r.base64)L.decodeAudioData(Ar(r.src),(function(t){e._setBuffer(s,t,i)}));else{var a=new XMLHttpRequest;a.open("GET",s.src,!0),a.responseType="arraybuffer",e.soundLoaded=!1,a.onload=function(){L.decodeAudioData(a.response,(function(t){e._setBuffer(s,t,i)}),e.onError)},a.send()}},a=0;a<n.length;a++)s(a);this.context={document:document,window:window,rootElement:document.body,unmount:function(){},masterNode:i,audioContext:L,getElements:this.getElements.bind(this),getMCID:this.getMCID.bind(this),setMCID:this.setMCID.bind(this),getElementSelectorByMCID:this.getElementSelectorByMCID.bind(this),getElementByMCID:this.getElementByMCID.bind(this)}}return a(t,[{key:"_setBuffer",value:function(t,e,n){t.soundLoaded=!0,t.buffer=e,t.audioNodeSet=new Er,t.audioNodeSet.connect(n.input),t.pubSub.pub()}},{key:"getElementByMCID",value:function(t){return K(this.elementsByMCID,t)?this.elementsByMCID[t]:null}},{key:"getElements",value:function(t){if("~"!==t.charAt(0)){if(Pr.exec(t)){var e=t.split('"')[1];return this.elementsByMCID[e]}return[]}if("#"===(t=t.substr(1)).charAt(0))return K(this.audioSources,t.substr(1))?[this.audioSources[t.substr(1)]]:[];if("."===t.charAt(0)){var n=t.substr(1),i=[];for(var r in this.audioSources)r.classes.indexOf(n)>=0&&i.push(r);return i}}},{key:"getMCID",value:function(t){return t.mcid}},{key:"setMCID",value:function(t,e){t.mcid=e}},{key:"getElementSelectorByMCID",value:function(t){return'[data-mcid="'.concat(t,'"]')}}]),t}(),Tr=function(t){u(i,t);var e=p(i);function i(t,s){var a;r(this,i),(a=e.call(this,t,s)).audioNodeSet=new Er,a.audioNodeSet.connect(L.destination);var o=new Sr(a.props.audioSources,a.audioNodeSet);return a.ownContext=n(n({},o.context),{},{isHostedClip:!0}),a.audioClip=!0,a}return a(i,[{key:"handleRecalcDuration",value:function(t,e){m(l(i.prototype),"handleRecalcDuration",this).call(this,t,e)&&this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:ht})}},{key:"onProgress",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=this.delay+this.calculatedDuration+this.hiatus,a=0===s?0:e%s;0!==e&&0===a&&(a=this.delay+this.calculatedDuration);var o=a-this.delay;if(!(o<0)){o>this.calculatedDuration&&(o=this.calculatedDuration);var u=0===this.calculatedDuration?0:o/this.calculatedDuration;m(l(i.prototype),"onProgress",this).call(this,u,o,this.id,r)}}},{key:"_onGetContextOnce",value:function(t){this.audioNodeSet.disconnect(),this.parentClipContext=t,this.audioNodeSet.connect(t.masterNode.input)}},{key:"lastWish",value:function(){this.audioNodeSet.output.disconnect(),this.audioNodeSet.output.connect(L.destination)}},{key:"setVolume",value:function(t){this.audioNodeSet.output.gain.value=t}}]),i}(wr),_r=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"onProgress",value:function(t){var e=this;if(!this.element.soundLoaded)return this.setBlock("loading sound"),this.element.pubSub.sub(this.id,(function(){e.unblock()})),!1;if("gain"===this.attributeKey){var n=(this.targetValue-this.initialValue)*t+this.initialValue;this.element.audioNodeSet.gainNode.gain.value=n}else if("pan"===this.attributeKey){var i=(this.targetValue-this.initialValue)*t+this.initialValue;this.element.audioNodeSet.pannerNode.pan.value=i}}},{key:"getScratchValue",value:function(){return"pan"===this.attributeKey?K(this.element.startValues,"pan")?this.element.startValues.pan:0:"gain"===this.attributeKey?K(this.element.startValues,"gain")?this.element.startValues.gain:1:void 0}}]),n}(Vt),Dr="|||",Mr=function(t){u(n,t);var e=p(n);function n(t){var i;return r(this,n),(i=e.call(this,t)).playingIncidentsIds=[],i.transitioned=!1,t.subscribe(nt(),i._stateChange.bind(h(i)),0,1,!0),i}return a(n,[{key:"_stateChange",value:function(t,e){"paused"!==e&&"idle"!==e&&"blocked"!==e||(this._stopPlayingIncidents(),this.transitioned=!0)}},{key:"_stopPlayingIncidents",value:function(){for(var t=0;t<this.playingIncidentsIds.length;t++){var e=this.playingIncidentsIds[t].split(Dr);this._incidentById(e[0]).stop(e[1])}this.playingIncidentsIds=[]}},{key:"moveTo",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("transitional"===this.runTimeInfo.state||i){this.transitioned=!0,this._stopPlayingIncidents();for(var r=0;r<this.incidents.length;r++){var s=this.incidents[r],a=s.id,o=s.millisecond,u=this._incidentById(a),l=void 0,c=void 0;e<o?(l=0,c=0):e>o+u.duration?(l=1,c=u.duration):l=(c=e-o)/u.duration,u.onProgress(l,c,n,!0)}}else{this.transitioned&&(t=0,this.transitioned=!1);for(var h=t>e,d=this.incidents,p=0;p<d.length;p++){var f=d[p],m=f.millisecond,v=this._incidentById(f.id),g=v.duration,y=m+g,k="".concat(f.id).concat(Dr).concat(n);if(y>t&&y<=e||h){v.stop(n);var b=this.playingIncidentsIds.indexOf(k);b>-1&&this.playingIncidentsIds.splice(b,1)}var x=h?0:t;if(m>=x&&m<e&&y>e){var C=(e-m)/g>=1,I=C?1:(e-m)/g,w=C?g:e-m,E=v.play(I,w,n);E&&this.playingIncidentsIds.push(k)}}this.runTimeInfo.currentMillisecond=e}}}]),n}(Ct),Vr=P(null,(function(t){return{F:function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0;r(this,e),t(this),this.attrs=n,this.props=i,this.dna=s,this.context=s.context,this.mcid=s.mcid,this.id=i.id||nt(),this.modelId=i.modelId,this.gotContext=!1,this.plugin_channel_class=Mr,this.mc_plugin_npm_name="motor-cortex-js-media-playback",K(i,"plugin_channel_class")&&(this.plugin_channel_class=i.plugin_channel_class),K(i,"mc_plugin_npm_name")&&(this.mc_plugin_npm_name=i.mc_plugin_npm_name),this.hasIncidents=!1,this.autoGenerated=!1,this.onInitialise(n,i)},d:[{kind:"get",key:"selector",value:function(){return this.props.selector}},{kind:"get",key:"element",value:function(){return this.context.getElementByMCID(this.mcid)}},{kind:"method",decorators:[Mt],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"_onGetContextOnce",value:function(){try{if(!0===this.context.fragment)return;this.gotContext||(this.onGetContext(),this.gotContext=!0)}catch(t){at.error(t),at.error(this.mcid)}}},{kind:"method",key:"onGetContext",value:function(){at.info('Overwritte the "onGetContext" method with the code you want to get executed',"info")}},{kind:"method",key:"lastWish",value:function(){}},{kind:"method",key:"onInitialise",value:function(){at.info('Overwritte the "onInialise" method with the code you want to get executed',"info")}},{kind:"method",key:"onProgress",value:function(t,e){}},{kind:"method",key:"play",value:function(t){return!0}},{kind:"method",key:"stop",value:function(){}},{kind:"method",decorators:[kt],key:"setBlock",value:function(){}},{kind:"method",decorators:[bt],key:"unblock",value:function(){}}]}})),$r={npm_name:"@kissmybutton/motorcortex-soundsystem",name:"Internal MotorCortex Soundsystem",incidents:[{exportable:function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"play",value:function(t){var e=this;if(!this.element.soundLoaded)return this.setBlock("loading sound"),this.element.pubSub.sub(this.id,(function(){e.unblock()})),!1;var n=0;return K(this.props,"startFrom")&&(n=this.props.startFrom),this.audioNode=L.createBufferSource(),this.audioNode.buffer=this.element.buffer,this.audioNode.connect(this.element.audioNodeSet.input),this.audioNode.start(0,(t+n)/1e3),!0}},{key:"stop",value:function(){this.audioNode&&this.audioNode.stop()}}]),n}(Vr),name:"AudioPlayback"},{exportable:_r,name:"AudioEffect"}],Clip:{exportable:Tr},audio:"only"},jr=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;r(this,t),this.realArray=[],null!=e&&(this.realArray=e)}return a(t,[{key:"_hasOwnProperty",value:function(t){return K(this.realArray,t)}},{key:"_get",value:function(t){return this.realArray[t]}},{key:"_set",value:function(t,e){this.realArray[t]=e}},{key:"_keys",value:function(){return Object.keys(this.realArray)}},{key:"_delete",value:function(t){return delete this.realArray[t]}},{key:"_export",value:function(){return this.realArray}}]),t}(),Nr=function(){function t(e){r(this,t),this.originalArray=e,this.extraArray={},this.addedKeys=[],this.removedKeys=new Set}return a(t,[{key:"_hasOwnProperty",value:function(t){return K(this.originalArray,t)||K(this.extraArray,t)}},{key:"_get",value:function(t){return K(this.extraArray,t)?this.extraArray[t]:K(this.originalArray,t)?this.originalArray[t]:void 0}},{key:"_set",value:function(t,e){this.extraArray[t]=e,K(this.originalArray,t)||this.addedKeys.push(t),this.removedKeys.delete(t)}},{key:"_keys",value:function(){var t=this,e=Object.keys(this.originalArray);return e.push.apply(e,k(this.addedKeys)),e.filter((function(e){return!t.removedKeys.has(e)}))}},{key:"_delete",value:function(t){var e=this.addedKeys.indexOf(t);return e>-1?(this.addedKeys.splice(e),delete this.extraArray[t]):(this.removedKeys.add(t),!0)}},{key:"_export",value:function(){for(var t in this.extraArray)this.originalArray[t]=this.extraArray[t];var e,n=E(this.removedKeys);try{for(n.s();!(e=n.n()).done;){var i=e.value;delete this.originalArray[i]}}catch(t){n.e(t)}finally{n.f()}return this.originalArray}}]),t}();function Br(t,e,n,i){var r=!1;for(var s in e)K(n,s)||(r=!0,i[s]=e[s]);return t.animatedAttributeValue=i,r}function Rr(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=t[i],a=e._get(s.id);a.setInitialValue(n,r);var o=Br(a,a.initialValue,a.originalAnimatedAttributeValue,JSON.parse(JSON.stringify(a.animatedAttributeValue)));o&&(a.lastWish(),a.onGetContext()),o&&i<t.length-1&&Rr(t,e,a.animatedAttributeValue,i+1,!1)}var Lr=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.lanes={},e.lanes&&(this.lanes=e.lanes),this.comboAttributes={},null!=e.comboAttributes&&(this.comboAttributes=e.comboAttributes),this.belongingLaneKeysByAnimationId={},e.belongingLaneKeysByAnimationId&&(this.belongingLaneKeysByAnimationId=e.belongingLaneKeysByAnimationId),this.incidentsById=new jr({}),e.incidentsById&&(this.incidentsById=e.incidentsById)}return a(t,[{key:"_resize",value:function(t){for(var e=Object.keys(this.lanes),n=0;n<e.length;n++)for(var i=e[n],r=this.lanes[i],s=0;s<r.length;s++)r[s].millisecond=r[s].millisecond*t}},{key:"createTestLanesSanbox",value:function(){var e={lanes:Jt(this.lanes),belongingLaneKeysByAnimationId:Jt(this.belongingLaneKeysByAnimationId),incidentsById:new Nr(this.incidentsById._export())};return this.comboAttributes&&(e.comboAttributes=this.comboAttributes),new t(e)}},{key:"getLane",value:function(t,e){return this.lanes[it(t,e)]}},{key:"applySandboxChanges",value:function(t){this.lanes=t.lanes.exportFlattened(),this.belongingLaneKeysByAnimationId=t.belongingLaneKeysByAnimationId.exportFlattened(),this.incidentsById=new jr(t.incidentsById._export())}},{key:"laneExists",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=it(t,e);return!!this.lanes.hasOwnProperty(i)||(n&&this.lanes.setValue(i,[]),!1)}},{key:"getOverlappingAnims",value:function(t,e,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return Array.from(this.lanes[it(e,n)]||[]).filter((function(e){var n=t.incident.duration;null!=s&&(n=s);var a=i.incidentsById._get(e.id).duration;return e.id!==t.incident.id&&!r.includes(e.id)&&(e.millisecond>=t.millisecond&&e.millisecond<n+t.millisecond||e.millisecond+a>t.millisecond&&e.millisecond+a<=n+t.millisecond||e.millisecond<t.millisecond&&e.millisecond+a>n+t.millisecond)}))}},{key:"addElementToLane",value:function(t,e,n,i){var r=this,s=[],a=it(t,e);this.incidentsById._set(i.id,i);var o={millisecond:n,id:i.id};this.laneExists(t,e,!0),this.lanes.pushValue(a,o),this.lanes[a].sortBy("millisecond");var u=this.lanes[a],l=this.lanes[a].findIndex((function(t){return t.id===i.id}));return K(i.id)||this.belongingLaneKeysByAnimationId.setValue(i.id,[]),this.belongingLaneKeysByAnimationId.pushValue(i.id,a),0===l?this.lanes[a].length>1?s.push((function(){i.setInitialValue(r.incidentsById._get(u[1].id).pureInitialValues)})):s.push((function(){i.setInitialValue()})):s.push((function(){i.setInitialValue(r.incidentsById._get(u[l-1].id).animatedAttributeValue)})),K(this.comboAttributes,e)&&s.push((function(){return Rr(u,r.incidentsById,i.initialValue,l)})),l+1<u.length&&s.push((function(){r.incidentsById._get(u[l+1].id).setInitialValue(i.animatedAttributeValue),r.incidentsById._get(u[l+1].id).gotContext&&(r.incidentsById._get(u[l+1].id).lastWish(),r.incidentsById._get(u[l+1].id).onGetContext())})),s}},{key:"updateLane",value:function(t,e){for(var n=this,i={},r=0;r<t.length;r++)for(var s=this.belongingLaneKeysByAnimationId[t[r]],a=0;a<s.length;a++){var o=s[a];K(i,o)||(i[o]={animations:[],lane:this.lanes[o],laneData:tt(s[a])}),i[o].animations.push(t[r])}for(var u in i){var l=i[u],c=l.laneData,h=l.lane,d=l.animations,p=k(h);p.sort((function(t,e){return t.millisecond-e.millisecond}));for(var f=K(this.comboAttributes,c.attribute),m=0;m<h.length;m++)d.includes(h[m].id)&&(h[m].millisecond+=e);h.sort((function(t,e){return t.millisecond-e.millisecond})),this.lanes[u]=h;for(var v=function(t){var e=d[t],i=p.findIndex((function(t){return t.id===e})),r=h.findIndex((function(t){return t.id===e}));if(i===r&&r<=1)return"continue";var s=n.incidentsById._get(h[r].id);if(i+1<h.length)if(0===i)if(f)Rr(h,n.incidentsById,s.pureInitialValues,0,!0);else{var a=n.incidentsById._get(p[1].id);a.setInitialValue(s.pureInitialValues),a.onGetContext()}else if(f){var o=r>i?i:r;Rr(h,n.incidentsById,n.incidentsById._get(p[i-1].id).animatedAttributeValue,o,!0)}else n.incidentsById._get(p[i+1].id).setInitialValue(n.incidentsById._get(p[i-1].id).animatedAttributeValue),n.incidentsById._get(p[i+1].id).onGetContext();if(0===r?f?Rr(h,n.incidentsById,n.incidentsById._get(p[0].id).pureInitialValues,r,!0):(s.setInitialValue(n.incidentsById._get(p[0].id).pureInitialValues),s.onGetContext()):f?Rr(h,n.incidentsById,n.incidentsById._get(h[r-1].id).animatedAttributeValue,r,!0):(s.setInitialValue(n.incidentsById._get(h[r-1].id).animatedAttributeValue),s.onGetContext()),r+1>=h.length)return"continue";if(f)return Rr(h,n.incidentsById,s.animatedAttributeValue,r+1,!0),"continue";var u=n.incidentsById._get(h[r+1].id);u.setInitialValue(s.animatedAttributeValue),u.onGetContext()},g=0;g<d.length;g++)v(g)}}},{key:"deleteAnimations",value:function(t){for(var e={},i=0;i<t.length;i++){for(var r=t[i],s=this.belongingLaneKeysByAnimationId[r],a=0;a<s.length;a++){for(var o=this.lanes[s[a]],u=-1,l=0;l<o.length;l++)if(o[l].id===r){u=l;break}for(var c=n({},o[u]),h=this.incidentsById._get(c.id),d=tt(s[a]),p=[],f=0;f<o.length;f++)o[f].id!==r&&p.push(o[f]);if(this.lanes[s[a]]=p,0!==(o=this.lanes[s[a]]).length){e[s[a]]=tt(s[a]);var m=this.incidentsById._get(c.id).pureInitialValues;if(!(u>=o.length||!1===m))if(K(this.comboAttributes,d.attribute))Rr(o,this.incidentsById,m,u,!0);else{var v=this.incidentsById._get(o[u].id);v.setInitialValue(m),v.onGetContext()}}else h.onProgress(0,0),delete this.lanes[s[a]],K(e,s[a])&&delete e[s[a]]}delete this.belongingLaneKeysByAnimationId[t[i]]}return e}},{key:"recalcScratchValues",value:function(t){for(var e=Object.keys(this.lanes),n=0;n<e.length;n++){var i=e[n],r=this.lanes[i];if(r.length>0){var s=this.incidentsById._get(r[0].id),a=s.getScratchValue(t),o=tt(i);K(this.comboAttributes,o.attribute)?Rr(r,this.incidentsById,a,0,!0):s.setInitialValue(a),s.lastWish(),s.onGetContext()}}}}]),t}(),Fr=function(t){u(i,t);var e=p(i);function i(t){var n;return r(this,i),(n=e.call(this,t)).comboAttributes={},n.fixedAttributeName="_",null!=t.comboAttributes&&(n.comboAttributes=t.comboAttributes),n.LanesHandler=new Lr({comboAttributes:n.comboAttributes}),n}return a(i,[{key:"setComboAttributes",value:function(t){this.comboAttributes=t,this.LanesHandler=new Lr({comboAttributes:this.comboAttributes})}},{key:"lanes",get:function(){return this.LanesHandler.lanes}},{key:"incidentsById",get:function(){return this.LanesHandler.incidentsById}},{key:"_resize",value:function(t){this.LanesHandler._resize(t)}},{key:"checkAddition",value:function(t){for(var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all-or-nothing",i=this.LanesHandler.createTestLanesSanbox(),r=[],s=[],a=[],o=function(n){var o=!1,u=t[n],l=u.incident,c=l.mcid,h=l.attribute||e.fixedAttributeName;i.laneExists(c,h),r.push({mcid:c,attribute:h});var d=i.getOverlappingAnims(u,c,h);if(d.length>0&&(o=!0,a.push({type:"unauthorised, overlapping incidents on the same element",meta:{element_mcid:c,attribute:h,incident:u,overlappingAnims:d}})),!o){var p=i.addElementToLane(c,h,u.millisecond,l);s.push((function(){for(var t=0;t<p.length;t++)p[t]();l._onGetContextOnce()}))}},u=0;u<t.length;u++)o(u);if(a.length>0&&"all-or-nothing"===n)return{result:!1,errors:a};var l=this.LanesHandler,c=function(){for(var t=0;t<r.length;t++){var e=it(r[t].mcid,r[t].attribute),n=i.lanes[e].exportFlattened();n.sort((function(t,e){return t.millisecond-e.millisecond})),i.lanes.setValue(e,n)}for(var a=0;a<s.length;a++)s[a]();l.applySandboxChanges(i)};return{result:!0,errors:a,execute:c}}},{key:"checkEdit",value:function(t,e){for(var i=[],r=0;r<t.length;r++)i.push(t[r].id);for(var s=this.LanesHandler.createTestLanesSanbox(),a=[],o=0;o<t.length;o++)for(var u=t[o].incident.id,l=t[o].incident.mcid,c=t[o].incident.attribute||this.fixedAttributeName,h=s.getLane(l,c),d=0;d<h.length;d++)if(h[d].id===u){var p=n({},h[d]);p.millisecond+=e,p.incident=s.incidentsById._get(p.id);var f=s.getOverlappingAnims(p,l,c,i);f.length>0&&a.push({type:"anauthorised, overlapping animations on the same element",meta:{element_mcid:l,attribute:c,newAnimation:p,overlappingAnims:f}});break}if(a.length>0)return{result:!1,errors:a};var m=this;return{result:!0,execute:function(){m.LanesHandler.updateLane(i,e)}}}},{key:"checkResizedIncidents",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=[],r=0;r<t.length;r++)i.push(t[r].id);for(var s=this.LanesHandler.createTestLanesSanbox(),a=[],o=0;o<t.length;o++)for(var u=this.LanesHandler.incidentsById._get(t[o].id),l=u.mcid,c=u.attribute||this.fixedAttributeName,h=s.getLane(l,c),d={mcid:l,attribute:c},p=t[o].end-t[o].start,f=0;f<h.length;f++)if(h[f].id===t[o].id){if(!e){var m=h[f],v=n({},m);v.millisecond+=t[o].startDelta,v.incident=s.incidentsById._get(v.id);var g=s.getOverlappingAnims(v,d.mcid,d.attribute,i,p);g.length>0&&a.push({type:"unauthorized overlapping animations on the same element",meta:{element_mcid:d.mcid,attribute:d.attribute,newAnimation:v,overlappingAnims:g}})}break}if(a.length>0)return{result:!1,errors:a};var y=this,k=function(){for(var e=0;e<t.length;e++)y.LanesHandler.updateLane([t[e].id],t[e].startDelta)};return{execute:k,result:!0}}},{key:"checkDelete",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n].id);var i=this;return{result:!0,execute:function(){i.LanesHandler.deleteAnimations(e)}}}},{key:"recalcScratchValues",value:function(t){this.LanesHandler.recalcScratchValues(t)}},{key:"slipIntoLaneForwards",value:function(t,e,n,i){var r=this,s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=t.filter((function(t){var i=r.incidentsById._get(t.id).duration+t.millisecond;return i>=e&&i<=n||i>=n&&t.millisecond<=n}));if(0===a.length){if(s&&0===e){var o=this.incidentsById._get(t[0].id);o.onProgress(0,0,i)}return!0}var u=a.length-1,l=this.incidentsById._get(a[u].id),c=a[u].millisecond,h=1,d=l.duration;l.duration+c>n&&(h=(d=n-c)/l.duration),l.onProgress(h,d,i)}},{key:"slipToLaneBackwards",value:function(t,e,n,i){var r=this,s=t.filter((function(t){var i=r.incidentsById._get(t.id).duration+t.millisecond;return i<=n&&i>=e||t.millisecond>=e&&t.millisecond<=n||t.millisecond<e&&i>n}));if(0===s.length)return!0;var a=this.incidentsById._get(s[0].id),o=s[0].millisecond,u=0,l=0;o<n&&(u=(n-o)/a.duration,l=n-o),a.onProgress(u,l,i)}},{key:"moveTo",value:function(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=Object.keys(this.lanes),s=0;s<r.length;s++){var a=this.lanes[r[s]];t<=e?this.slipIntoLaneForwards(a,t,e,n,i):this.slipToLaneBackwards(a,t,e,n,i)}}}]),i}(ct);o(Fr,"type","attributes");var zr=function(){function t(){r(this,t),this.customEntities={}}return a(t,[{key:"calcClipDims",value:function(t){var e={use:!1,width:null,height:null};return K(t,"originalDims")&&null!=t.originalDims.width&&null!=t.originalDims.height?{use:!0,width:t.originalDims.width.number+t.originalDims.width.unit,height:t.originalDims.height.number+t.originalDims.height.unit}:(K(t,"containerParams")&&(K(t.containerParams,"width")&&(e.use=!0,e.width=t.containerParams.width),K(t.containerParams,"height")&&(e.use=!0,e.height=t.containerParams.height)),e)}},{key:"scalingCalculator",value:function(t){if(!K(t,"containerParams")||!K(t,"originalDims")||null==t.originalDims.width&&null==t.originalDims.height)return{width:1,height:1};var e=Q(t.containerParams),n=null,i=null;return null!==e.width&&null!==t.originalDims.width&&(e.width.unit===t.originalDims.width.unit?n=e.width.number/t.originalDims.width.number:at.warning("containerParams and originalDims width of Incident have different dimensions.\n          containerParams.width will be ignored")),null!==e.height&&null!==t.originalDims.height&&(e.height.unit===t.originalDims.height.unit?i=e.height.number/t.originalDims.height.number:at.warning("containerParams and originalDims height of Incident have different dimensions.\n          containerParams.width will be ignored")),null===n&&null===i?{width:1,height:1}:(null!==n&&null===i?i=n:null!==i&&null===n&&(n=i),{width:n,height:i})}},{key:"getElementByMCID",value:function(t){if(K(this.customEntities,t))return this.customEntities[t];if(K(this.elementsByMCID,t))return this.elementsByMCID[t];var e=this.context.rootElement.querySelector(this.getElementSelectorByMCID(t));return this.elementsByMCID[t]=e,e}},{key:"getElements",value:function(t){if(null==t||""===t)return[];if("!"===t.charAt(0)){if("#"===(t=t.substr(1)).charAt(0))return[this.customEntities[t.substr(1)]];if("."===t.charAt(0)){var e=[];for(var n in this.customEntities){var i=this.customEntities[n];i.classes.includes(t.substr(1))&&e.push(i)}return e}}return Array.from(this.context.rootElement.querySelectorAll(t))}},{key:"getMCID",value:function(t){return t.customEntity?t.id:t.getAttribute(j)}},{key:"setMCID",value:function(t,e){t.setAttribute(j,e)}},{key:"getElementSelectorByMCID",value:function(t){return K(this.customEntities,t)?"!#".concat(t):"[".concat(j,'="').concat(t,'"]')}},{key:"setCustomEntity",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return K(this.customEntities,t)?(at.error("Clip ".concat(this.id," already has custom Entity with id: ").concat(t)),!1):(this.customEntities[t]={id:t,entity:e,classes:n,customEntity:!0},!0)}}]),t}(),Gr=/({{ *| *}})/g;function qr(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object.keys(t).join("|");if(""===n)return!1;var i="(?<![a-z,A-Z_0-9])(".concat(n,")(((\\.[a-zA-Z_][a-zA-Z0-9_]*)|(\\[[0-9]*\\]))*)(?![a-z,A-Z_0-9])");return e?i:new RegExp(i,"g")}var Kr=/{{((?!}}).)*}}/g,Jr=/(?<= *mc-if *= *" *)[^"]*(?=")/g,Wr=/'.*'/g,Hr=/^ *([0-9.]+|(((?<!\\)')([^']|\\')*((?<!\\)')))( *\+ *(((?<!\\)')([^']|\\')*((?<!\\)')|[0-9.]+))* *$/g,Ur=/^( *([0-9.]+|(((?<!\\)')([^']|\\')*((?<!\\)')))( *\+ *(((?<!\\)')([^']|\\')*((?<!\\)')|[0-9.]+))* *)(==|===)( *([0-9.]+|(((?<!\\)')([^']|\\')*((?<!\\)')))( *\+ *(((?<!\\)')([^']|\\')*((?<!\\)')|[0-9.]+))* *)$/g,Zr=new Ei;function Qr(t){for(var e=t.split(/ *\+ */),n=0;n<e.length;n++)e[n]=e[n].trim(),e[n].match(Wr)&&(e[n]=e[n].substring(1,e[n].length-1));return e.join("")}function Xr(t,e){function n(t){var n=t.match(Gr),i=t.replaceAll(Gr,""),r=qr(e.items),s=function(t){var e=Object.keys(t).join("|");if(""===e)return!1;var n="(?<![a-z,A-Z_0-9])(".concat(e,")(?![a-z,A-Z_0-9.\\[])");return new RegExp(n,"g")}(e.keys);if(!1!==r&&(i=i.replaceAll(r,(function(t){if("initParams"===t||"attrs"===t)return"undefined";var n=qt(t,"",e.items);return z(n)&&(n="'".concat(n,"'")),n}))),!1!==s&&(i=i.replaceAll(s,(function(t){var n=e.keys[t];return z(n)&&(n="'".concat(n,"'")),n}))),i.match(Ur)){var a=i.split(/===|==/);return a[0]=Qr(a[0]),a[1]=Qr(a[1]),(a[0]===a[1]).toString()}if(i.match(Hr))return Qr(i);try{var o=Zr.parse(i),u=Object.assign({},e.keys,e.items),l=o.evaluate(u);if(void 0!==l)return l}catch(t){}var c=/===|==|>=|>|<=|<|!==|!=/g,h=i.split(c);if(2===h.length){var d=i.match(c)[0];try{var p=Zr.parse(h[0]),f=Zr.parse(h[1]),m=Object.assign({},e.keys,e.items);return function(t,e,n){switch(n){case"==":case"===":return t===e;case"!=":case"!==":return t!==e;case">":return t>e;case">=":return t>=e;case"<":return t<e;case"<=":return t<=e;default:return at.error("Not supported operator "+n),!1}}(p.evaluate(m),f.evaluate(m),d).toString()}catch(t){}}return null!==n?"{{".concat(i,"}}"):i}return t.replaceAll(Kr,n).replaceAll(Jr,n)}function Yr(t){var e,n=E(t.querySelectorAll("[mc-if]"));try{for(n.s();!(e=n.n()).done;){var i=e.value,r=i.getAttribute("mc-if");"true"===r?i.removeAttribute("mc-if"):"false"===r&&i.remove()}}catch(t){n.e(t)}finally{n.f()}}function ts(t,e){if(!t.hasAttribute("mc-for")||!t.hasAttribute("mc-of"))return at.warning("Either mc-for and mc-of is missing from element"),!1;if(!t.getAttribute("mc-for").match(/^ *[a-zA-Z_][0-9a-zA-Z_]* *, *[a-zA-Z_][0-9a-zA-Z_]* *$/))return at.warning("mc-for attribute is not a valid expression"),!1;var n=function(t){var e="^ *".concat(qr(t,!0)," *$");return new RegExp(e,"g")}(e),i=t.getAttribute("mc-of").match(n);if(1!==(null==i?void 0:i.length))return at.warning("mc-of attribute is not a valid expression"),!1;var r=qt(i[0].trim(),"",e);return void 0===r?(at.warning("mc-of value is undefined"),!1):G(r)?r:(at.warning("mc-of value should be either an object or an array"),!1)}function es(t){var e=[],n=Jt(t.params);for(var i in t.items)n.setValue("keys.".concat(t.keys.key),i),n.setValue("items.".concat(t.keys.item),t.items[i]),e.push(is(t.template,n.exportFlattened(),!0));return e}function ns(t,e){var n,i=E(t.querySelectorAll("[mc-for]"));try{for(i.s();!(n=i.n()).done;){var r=n.value,s=ts(r,e.items);if(!1!==s&&G(s)){var a=r.getAttribute("mc-for").split(","),o={key:a[0].trim(),item:a[1].trim()};r.removeAttribute("mc-for"),r.removeAttribute("mc-of");var u=es({template:r.outerHTML,keys:o,params:e,items:s});if(0!==u.length){for(var l=r,c=0;c<u.length;c++){var h=l.parentNode.insertBefore(u[c],l.nextSibling);l=h}r.remove()}else r.remove()}else r.remove()}}catch(t){i.e(t)}finally{i.f()}}function is(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t=Xr(t=t.replace(/^\s+|\s+$/g,""),e),!n)return t;var i=document.createElement("div");return i.innerHTML=t,Yr(i),ns(i,e),1!==i.childElementCount?(console.error("parser only accepts close DOM trees (always contained on a single element). The root element can not have mc-for applied to it. Returning empty div"),document.createElement("div")):i.firstChild}function rs(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(q(t))return t(e);var i=is(t,{items:{initParams:e},keys:{}},n);return z(i)?i:i.outerHTML}var ss=function(t){u(n,t);var e=p(n);function n(){var t,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r(this,n),t=e.call(this),!G(s))return at.error("ContextHandler expects an object on its constructor. ".concat(i(s)," passed")),d(t,!1);if(!K(s,"html"))return at.error("ContextHandler expects the html key on its constructor properties which is missing"),d(t,!1);if(!K(s,"css"))return at.error("ContextHandler expects the css key on its constructor properties which is missing"),d(t,!1);if(K(s,"initParams")||at.info("ContextHandler got null initParams"),!K(s,"host"))return at.error("ContextHandler expects the host key on its constructor properties which is missing"),d(t,!1);t.isDOM=!0;var a=s.host.ownerDocument;if(!a.getElementById("@kissmybutton/motorcortex/iframeContextHandler/css")){var o="\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",u=a.createElement("style");u.id="@kissmybutton/motorcortex/iframeContextHandler/css",u.type="text/css";var l=a.head||a.getElementsByTagName("head")[0];u.styleSheet?u.styleSheet.cssText=o:u.appendChild(a.createTextNode(o)),l.appendChild(u)}var c=a.createElement("iframe");s.host.appendChild(c);var p=t.scalingCalculator(s),f=t.calcClipDims(s);c.setAttribute("seamless","seamless"),!0===f.use&&(null!==f.width&&c.setAttribute("width",f.width),null!==f.height&&c.setAttribute("height",f.height)),c.style.transform="scale(".concat(p.width,", ").concat(p.height,")"),c.style.transformOrigin="top left",c.style.position="absolute",c.src="";var m=c.contentWindow||c.contentDocument;m.document&&(m=m.document),m.write(rs(s.html,s.initParams,!0));var v="\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",g=m.createElement("style");g.type="text/css",g.styleSheet?g.styleSheet.cssText=rs(s.css,s.initParams)+v:g.appendChild(a.createTextNode(rs(s.css,s.initParams)+v));var y=m.head||m.getElementsByTagName("head")[0];if(y.appendChild(g),K(s,"fonts"))for(var k=0;k<s.fonts.length;k++){var b=s.fonts[k];if("google-font"===b.type){var x=m.createElement("link");x.setAttribute("rel","stylesheet"),x.setAttribute("href",b.src),y.appendChild(x)}}return t.rootElement=c,m.close(),t.context={document:m,window:c.contentWindow||c,clipContainer:c,rootElement:m.body,unmount:function(){s.host.removeChild(c)},getElements:t.getElements.bind(h(t)),getMCID:t.getMCID.bind(h(t)),setMCID:t.setMCID.bind(h(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(h(t)),getElementByMCID:t.getElementByMCID.bind(h(t)),setCustomEntity:t.setCustomEntity.bind(h(t))},t.elementsByMCID={},t}return n}(zr),as=function(t){u(n,t);var e=p(n);function n(){var t,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r(this,n),t=e.call(this),!G(s))return at.error("ContextHandler expects an object on its constructor. ".concat(i(s)," passed")),d(t,!1);if(!K(s,"html"))return at.error("ContextHandler expects the html key on its constructor properties which is missing"),d(t,!1);if(!K(s,"css"))return at.error("ContextHandler expects the css key on its constructor properties which is missing"),d(t,!1);if(!K(s,"host"))return at.error("ContextHandler expects the host key on its constructor properties which is missing"),d(t,!1);t.isDOM=!0;var a=s.host.shadowRoot;a||(a=s.host.attachShadow({mode:"open"}));var o=document.createElement("div"),u=t.scalingCalculator(s),l=t.calcClipDims(s);o.setAttribute("data-motorocortex-container","true"),!0===l.use&&(null!==l.width&&(o.style.width=l.width),null!==l.height&&(o.style.height=l.height)),o.style.transform="scale(".concat(u.width,", ").concat(u.height,")"),o.style.transformOrigin="top left",o.style.position="absolute",o.style.overflow="hidden",o.innerHTML=rs(s.html,s.initParams,!0),a.appendChild(o);var c=document.createElement("slot");a.appendChild(c);var p=document.createElement("style");if(p.type="text/css",p.styleSheet?p.styleSheet.cssText=rs(s.css,s.initParams):p.appendChild(document.createTextNode("[data-motorocortex-container] { all: initial; }"+rs(s.css,s.initParams))),a.appendChild(p),t.fontTags=[],K(s,"fonts"))for(var f=0;f<s.fonts.length;f++){var m=s.fonts[f];if("google-font"===m.type){var v=document.createElement("link");v.setAttribute("rel","stylesheet"),v.setAttribute("href",m.src),document.getElementsByTagName("head")[0].appendChild(v),t.fontTags.push(v)}}return o.style.overflow="hidden",t.rootElement=o,t.context={document:document,window:window,clipContainer:t.rootElement,rootElement:o,unmount:function(){try{a.innerHTML="";for(var t=0;t<this.fontTags.length;t++)document.getElementsByTagName("head")[0].removeChild(this.fontTags[t])}catch(t){at.warning("The element of the Clip to be removed seems not to exist any more")}},getElements:t.getElements.bind(h(t)),getMCID:t.getMCID.bind(h(t)),setMCID:t.setMCID.bind(h(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(h(t)),getElementByMCID:t.getElementByMCID.bind(h(t)),setCustomEntity:t.setCustomEntity.bind(h(t))},t.elementsByMCID={},t}return n}(zr),os=function(t){u(i,t);var e=p(i);function i(){var t,s,a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r(this,i),null===u?(s={},a=o):(s=o,a=u),t=e.call(this,s,a),a=n(n({},a),{},{html:""!==t.html?t.html:a.html,css:""!==t.css?t.css:a.css,fonts:t.fonts.length>0?t.fonts:a.fonts});var l=N;t.clipType=l;var c=new(document.head.createShadowRoot||document.head.attachShadow?as:ss)(a);return t.ownContext=n(n({},c.context),{},{isHostedClip:t.isHostedClip,initParams:a.initParams}),t.iframe=c.iframeElement,t.forceExportIncidents=!0,t.onAfterRender(),t}return a(i,[{key:"onAfterRender",value:function(){}},{key:"html",get:function(){return""}},{key:"css",get:function(){return""}},{key:"fonts",get:function(){return[]}},{key:"rootElement",get:function(){return this.context.clipContainer}},{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:n(n({},this.props),{},{host:void 0,html:!0===this.DescriptiveIncident.constructor.customClip?"":this.context.rootElement.innerHTML})}}},{key:"setCustomEntity",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this.context.setCustomEntity(t,e,n)}}]),i}(wr),us=function(t){u(s,t);var e=p(s);function s(){var t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,s),t=e.call(this);var o=n({},a);if(!G(o))return at.error("HTMLFragmentContextHandler expects an object on its constructor. ".concat(i(o)," passed")),d(t,!1);K(o,"html")||(o.html=""),t.isDOM=!0;var u=document.createDocumentFragment(),l=document.createElement("div");return K(o,"containerParams")&&(K(o,"width")&&(l.style.width=o.containerParams.width),K(o,"height")&&(l.style.height=o.containerParams.height)),l.innerHTML=rs(o.html,o.initParams,!0),u.appendChild(l),l.style.overflow="hidden",t.rootElement=l,t.context={document:document,window:window,clipContainer:t.rootElement,rootElement:l,unmount:function(){o.host.removeChild(u)},getElements:t.getElements.bind(h(t)),getMCID:t.getMCID.bind(h(t)),setMCID:t.setMCID.bind(h(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(h(t)),getElementByMCID:t.getElementByMCID.bind(h(t)),setCustomEntity:t.setCustomEntity.bind(h(t)),fragment:!0},t.elementsByMCID={},t}return s}(zr),ls=function(t){u(i,t);var e=p(i);function i(){var t,s,a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r(this,i),null===u?(s={},a=o):(s=o,a=u),t=e.call(this,s,a);var l=new us(n(n({},a),{},{html:K(a,"html")?a.html:t.html,css:K(a,"css")?a.css:t.css,fonts:K(a,"fonts")?a.fonts:t.fonts}));return t.ownContext=n(n({},l.context),{},{isHostedClip:!1}),t.iframe=l.iframeElement,t.forceExportIncidents=!0,t.onDOMCLipInitialise(),t}return a(i,[{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:n(n({},this.props),{},{html:this.context.rootElement.innerHTML})}}},{key:"onDOMCLipInitialise",value:function(){}},{key:"rootElement",get:function(){return this.context.clipContainer}}]),i}(wr),cs=function(){function t(){r(this,t)}return a(t,[{key:"duration",get:function(){return 0}},{key:"addIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"moveIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"removeIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"resizeIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"getIncidentsByChannel",value:function(){return{}}},{key:"flash",value:function(){}},{key:"_resize",value:function(){}},{key:"onProgress",value:function(){}}]),t}(),hs=function(){function t(e){r(this,t),this.runTimeInfo={currentMillisecond:0,state:"transitional"},this.id=nt(),this.realClip=e.descriptiveIncident.realClip;var i=e.descriptiveIncident.realClip.exportConstructionArguments(),s=n(n({},i.props),{},{selector:void 0,host:e.host,id:this.id});this.ownClip=new e.descriptiveIncident.constructor.Incident(i.attrs,s),e.descriptiveIncident.realClip.addContext({clipId:this.id,context:this.ownClip.context,synchronize:e.synchronize,runTimeInfo:this.runTimeInfo},!0)}return a(t,[{key:"onProgress",value:function(t,e){for(var n in this.realClip.instantiatedChannels){this.realClip.instantiatedChannels[n].moveTo(this.runTimeInfo.currentMillisecond,e,this.id,!0)}this.runTimeInfo.currentMillisecond=e}}]),t}(),ds=P(null,(function(t,e){var i=function(e){u(s,e);var i=p(s);function s(e){var a,o,u,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r(this,s),null===l?(o={},u=e):(o=e,u=l),a=i.call(this,o,u),t(h(a)),a.initParams=u.initParams||{};var c=a._validateProps();if(!c.result)return d(a,c);a.isTheRootClip=!1,a.isExportableToJSONFormat=!0,Object.prototype.hasOwnProperty.call(u,"html")&&q(u.html)&&(a.isExportableToJSONFormat=!1);var p={id:a.id,attrs:o,props:n(n({},u),{},{html:Object.prototype.hasOwnProperty.call(u,"html")?u.html:a.html,css:Object.prototype.hasOwnProperty.call(u,"css")?u.css:a.css,fonts:Object.prototype.hasOwnProperty.call(u,"fonts")?u.fonts:a.fonts,runTimeInfo:a.runTimeInfo,subscribe:a.subscribe.bind(h(a)),repeats:1,delay:0,hiatus:0}),plugin_npm_name:a.constructor.plugin_npm_name,Channel:a.constructor.Channel,DescriptiveIncident:h(a)};if(a.audio="on",Object.prototype.hasOwnProperty.call(a.constructor,"audio")&&(a.audio=a.constructor.audio),Object.prototype.hasOwnProperty.call(u,"audio")&&(a.audio=u.audio),Object.prototype.hasOwnProperty.call(u,"selector")&&void 0!==u.selector&&!0!==a.constructor.customClip)p.Incident=ls;else if(Object.prototype.hasOwnProperty.call(u,"selector")&&void 0!==u.selector&&!0===a.constructor.customClip){delete p.props.selector;var f=new ls({html:'<div id="clip-container"></div>'});p.props.host=f.rootElement,p.Incident=a.constructor.Incident}else"only"===a.audio&&!0!==a.props.root?a.isTheRootClip=!1:(a.isTheRootClip=!0,a.blockingWaitings={},p.Incident=a.constructor.Incident);if("on"===a.audio||"off"===a.audio?a.realClip=jt(p):a.realClip=new cs,"on"===a.audio||"only"===a.audio){var m={id:a.id,attrs:{},props:{audioSources:Object.prototype.hasOwnProperty.call(u,"audioSources")?u.audioSources:a.audioSources,runTimeInfo:a.runTimeInfo,subscribe:a.subscribe.bind(h(a)),hiatus:a.hiatus,delay:a.delay,repeats:a.repeats},plugin_npm_name:a.constructor.plugin_npm_name,Channel:a.constructor.Channel,Incident:Tr,DescriptiveIncident:h(a)};a.audioClip=jt(m)}else a.audio="off",a.audioClip=new cs;return a.attributesStaggers=[],a.propsStaggers=[],a.setupDynamicValues(),a.dynamicDurationValue=null,a.passiveAddition=!0,a._buildTree(),a.passiveAddition=!1,a.constructor.isAnimation&&Object.prototype.hasOwnProperty.call(a.props,"duration")&&a.resize(a.duration),a}return s}(e);return{F:i,d:[{kind:"field",static:!0,key:"isClip",value:function(){return!0}},{kind:"field",static:!0,key:"Incident",value:function(){return os}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"@kissmybutton/self-contained-incidents"}},{kind:"field",static:!0,key:"version",value:function(){return Wt}},{kind:"field",static:!0,key:"Channel",value:function(){return Ct}},{kind:"field",static:!0,key:"ClassName",value:function(){return"HTMLClip"}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return er}},{kind:"method",key:"_validateProps",value:function(){return ot({props:this.props},er,this.constructor,this.id)}},{kind:"get",key:"selectorToPassToChildren",value:function(){return null}},{kind:"get",key:"inheritedSelector",value:function(){return this._inheritedSelector}},{kind:"set",key:"inheritedSelector",value:function(t){this._inheritedSelector=t}},{kind:"get",key:"html",value:function(){return""}},{kind:"get",key:"css",value:function(){return""}},{kind:"get",key:"fonts",value:function(){return[]}},{kind:"get",key:"audioSources",value:function(){return[]}},{kind:"method",decorators:[vr],key:"setupDynamicValues",value:function(){}},{kind:"get",key:"duration",value:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:this.propsStaggers.length>0?"dynamic":Object.prototype.hasOwnProperty.call(this.props,"duration")?this.repeats*(this.delay+this.props.duration+this.hiatus):m(l(i.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){if(0!=this.propsStaggers.length){for(var e=0;e<this.propsStaggers.length;e++)if("repeats"!==this.propsStaggers[e].path){var n=this.propsStaggers[e].stagger.resize(t/this.duration);st(this.props,this.propsStaggers[e].path,n)}this.dynamicDurationValue=t}else g(l(i.prototype),"duration",t,this,!0)}},{kind:"method",key:"systoleDiastole",value:function(t){this.constructor.isAnimation&&(this.props.duration?this.props.duration*=t:this.props.duration=t*this.calculatedDuration),this.realClip._resize(t),m(l(i.prototype),"systoleDiastole",this).call(this,t)}},{kind:"method",key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=m(l(i.prototype),"exportLiveDefinition",this).call(this,t);return this.constructor.isAnimation&&(e.props.duration=this.props.duration?this.props.duration:this.calculatedDuration),q(this.props.html)&&(e.props.html=this.props.html),q(this.props.css)&&(e.props.css=this.props.css),e}},{kind:"method",key:"_buildTree",value:function(){void 0!==this.realClip&&this.buildTree()}},{kind:"method",key:"resize",value:function(t){if("dynamic"===this.duration)return{result:!1,reason:"Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable"};var e=t/this.duration;return this.realClip._resize(e),this.audioClip._resize(e),this.duration=t,this.constructor.isAnimation&&(this.props.duration?this.props.duration*=e:this.props.duration=this.calculatedDuration),this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:ht}),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:ht}),{result:!0}}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){return{result:!1,errors:["Clips attributes and properties can not be edited"]}}},{kind:"method",key:"handleCheckForClip",value:function(t,e){return!0}},{kind:"method",key:"handleGetElements",value:function(t,e){return this.realClip.getElements(e.selector)}},{kind:"method",key:"handleCheckAddition",value:function(t,e){var n=this.realClip.addIncident(e),i=this.audioClip.addIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:ht}),{result:!0}):n}},{kind:"method",key:"handleCheckMove",value:function(t,e){var n=this.realClip.moveIncident(e),i=this.audioClip.moveIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:ht}),{result:!0}):n}},{kind:"method",key:"handleCheckDeletion",value:function(t,e){var n=this.realClip.removeIncident(e),i=this.audioClip.removeIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:ht}),{result:!0}):n}},{kind:"method",key:"handleCheckResize",value:function(t,e){var n=this.realClip.resizeIncident(e),i=this.audioClip.resizeIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:ht}),{result:!0}):n}},{kind:"method",key:"handleFlash",value:function(t,e){if(!this.isTheRootClip)return this.bypass();this.flash()}},{kind:"method",key:"exportDefinition",value:function(){var t=m(l(i.prototype),"exportDefinition",this).call(this);return this.constructor.isAnimation&&(t.props.duration=this.props.duration?this.props.duration:this.calculatedDuration),t}},{kind:"method",key:"handleSetBlock",value:function(t,e){if(!this.isTheRootClip)return this.bypass();"transitional"!==this.runTimeInfo.state&&("blocked"!==this.runTimeInfo.state&&(this.statusBeforeBlock=this.runTimeInfo.state),this.blockingWaitings[e.id]=e,this.block())}},{kind:"method",key:"handleUnBlock",value:function(t,e){if(!this.isTheRootClip)return this.bypass();Object.prototype.hasOwnProperty.call(this.blockingWaitings,e.id)&&(delete this.blockingWaitings[e.id],0===Object.keys(this.blockingWaitings).length&&("playing"===this.statusBeforeBlock?(this.previousTimeStamp=-1,this.play()):this.arm()))}},{kind:"method",key:"stop",value:function(){m(l(i.prototype),"stop",this).call(this),this.blockingWaitings={}}},{kind:"method",key:"onProgress",value:function(t,e){this.realClip.onProgress(t,e),this.audioClip.onProgress(t,e)}},{kind:"method",key:"paste",value:function(t){return this.isTheRootClip?new hs({host:t,descriptiveIncident:this}):null}},{kind:"method",key:"flash",value:function(){this.realClip.flash()}},{kind:"method",key:"setVolume",value:function(t){return t<0||t>1?{result:!1,errors:[{type:"invalid volume number"}]}:"off"===this.audio?{result:!1,errors:[{type:"can not set volume of Clip with audio off"}]}:(this.audioClip.setVolume(t),{result:!0})}}]}}),function(t){u(n,t);var e=p(n);function n(t,i){var s;return r(this,n),(s=e.call(this,t,i)).runTimeInfo={currentMillisecond:0,state:"idle"},s.listeners={},s.previousTimeStamp=-1,s.speed=1,s}return a(n,[{key:"_setState",value:function(t){if(t!==this.runTimeInfo.state)for(var e in this.runTimeInfo.state=t,this.putMessageOnPipe("setState",t,"Clips",{selfExecute:!1,direction:dt}),this.listeners){this.listeners[e].funct(this.runTimeInfo.currentMillisecond,t)}}},{key:"handleSetState",value:function(t,e){this._setState(e)}},{key:"play",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("idle"===this.runTimeInfo.state||"paused"===this.runTimeInfo.state||"armed"===this.runTimeInfo.state||"transitional"===this.runTimeInfo.state||"blocked"===this.runTimeInfo.state){if("paused"===this.runTimeInfo.state){var n=(new Date).getTime()-this.pauseMoment;this.previousTimeStamp+=n}this._setState("playing"),this.onPlay(),e||window.requestAnimationFrame((function(e){t.step(e)}))}}},{key:"pause",value:function(){"playing"===this.runTimeInfo.state&&(this._setState("paused"),this.pauseMoment=(new Date).getTime(),this.onWait())}},{key:"arm",value:function(){"transitional"!==this.runTimeInfo.state&&"blocked"!==this.runTimeInfo.state||this._setState("armed")}},{key:"complete",value:function(){this._setState("idle"),this.previousTimeStamp=-1}},{key:"stop",value:function(){this._setState("transitional"),this.previousTimeStamp=-1}},{key:"block",value:function(){this._setState("blocked"),this.previousTimeStamp=-1}},{key:"onPlay",value:function(){}},{key:"onWait",value:function(){}},{key:"playableProgress",value:function(t,e){if(this.isTheRootClip){for(var n in this.listeners){var i=this.listeners[n];!0!==i.onlyOnStateChange&&(Math.abs(e+i.cavaDelta-this.runTimeInfo.currentMillisecond)>i.threshold?(i.funct(Y(e,i.roundTo),this.runTimeInfo.state),i.cavaDelta=0):i.cavaDelta+=Math.abs(e-this.runTimeInfo.currentMillisecond))}return this.onProgress(t,e),this.runTimeInfo.currentMillisecond=e,!0}return!1}},{key:"executionSpeed",set:function(t){this.isTheRootClip&&(this.speed=parseFloat(t))}},{key:"step",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("playing"===this.runTimeInfo.state){var n=this;-1===this.previousTimeStamp&&(this.previousTimeStamp=t);var i={milliseconds:Math.round(this.runTimeInfo.currentMillisecond+(t-this.previousTimeStamp)*this.speed),fraction:(this.runTimeInfo.currentMillisecond+(t-this.previousTimeStamp)*this.speed)/this.duration};if(i.fraction>=1)return this.playableProgress(1,this.duration),void this.complete();if(i.fraction<0)return this.playableProgress(0,0),void this.complete();this.playableProgress(i.fraction,i.milliseconds),this.previousTimeStamp=t,e||window.requestAnimationFrame(n.step.bind(n))}}},{key:"subscribe",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n||(n=0),i||(i=1),this.listeners[t]={funct:e,threshold:n,roundTo:i,cavaDelta:0,onlyOnStateChange:r}}},{key:"unsubscribe",value:function(t){K(this.listeners,t)&&delete this.listeners[t]}},{key:"subscribeToDurationChange",value:function(t){return!!this.isTheRootClip&&(this.realClip.subscribeToDurationChange(t),!0)}}]),n}(gr)),ps=function(t){u(n,t);var e=p(n);function n(t){var i,s,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r(this,n),null===a&&K(t,"audioSources")?(i={},s=t):null===a?(i=t,s={}):(i=t,s=a),s.audio="only",e.call(this,i,s)}return n}(ds),fs=ji.compile({incidents:{type:"array",items:{type:"object",props:{position:{type:"amount",integer:!0,min:0,optional:!1},attrs:{type:"object",optional:!1},props:{type:"object",optional:!1},incidentClass:{type:"any",optional:!1}}}}}),ms="Combos don't allow external addition or manipulation to their Incidents";function vs(){return at.error(ms),{result:!1,errors:[ms]}}var gs=function(t){u(i,t);var e=p(i);function i(t,n){var s;r(this,i),o(h(s=e.call(this,t,n)),"addIncident",vs),o(h(s),"moveIncident",vs),o(h(s),"removeIncident",vs),o(h(s),"handleCheckAddition",rt),o(h(s),"handleCheckMove",rt),o(h(s),"handleCheckDeletion",rt),o(h(s),"handleCheckResize",rt),null!==s.incidents&&(s.attrs.incidents=s.incidents,s.attributesStaggers=[],s.propsStaggers=[],s.setupDynamicValues());var a=ot(s.props,ir,s.constructor);if(!a.result)return d(s,a);var u=fs(s.attrs);if(u.length>0)return at.error("The provided attributes for Combo Incident are invalid"),d(s,{result:!1,errors:u});for(var l=[],c=0;c<s.attrs.length;c++){var p=s.attrs[c];if(null!==p.incidentClass.attrsValidationRules){var f=p.incidentClass.attrsValidationMethod(p.attrs);f.length>0&&l.concat(f.errors)}var m=ot(p.props,p.incidentClass.propsValidationRules,p.incidentClass);m.result||l.concat(m.errors)}return l.length>0?d(s,{result:!1,errors:l}):(s.dynamicDurationValue=null,s)}return a(i,[{key:"incidents",get:function(){return null}},{key:"duration",get:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:"dynamic"}},{key:"exportDefinition",value:function(){var t=n(n({},this.attrs),{},{incidents:function t(e){for(var i=[],r=0;r<e.length;r++){var s=e[r],a=s.attrs;"Combo"===s.incidentClass.ClassName&&(a=n(n({},a),{},{incidents:t(a.incidents)})),i.push({ClassName:s.incidentClass.ClassName||s.incidentClass.targetClass.ClassName,plugin_npm_name:s.incidentClass.plugin_npm_name||s.incidentClass.targetClass.plugin_npm_name,version:s.incidentClass.version||s.incidentClass.targetClass.version,attrs:a,props:JSON.parse(JSON.stringify(s.props)),position:s.position})}return i}(this.attrs.incidents)});return{ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:t,props:JSON.parse(JSON.stringify(this.props)),incidents:{},duration:this.duration}}},{key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.attrs;null!==this.incidents&&(e=n(n({},this.attrs),{},{incidents:void 0}));var i=JSON.parse(JSON.stringify(this.props));return t||delete i.id,{Class:this.constructor,attrs:e,props:i,incidents:{}}}}]),i}(gr);o(gs,"isCombo",!0),o(gs,"ClassName","Combo"),o(gs,"attrsValidationRules",null),o(gs,"propsValidationRules",ir);var ys=P(null,(function(t,e){var n=function(e){u(i,e);var n=p(i);function i(e,s){var a;r(this,i),void 0===s&&(s=e,e={}),a=n.call(this,s),t(h(a));var o=ot(s,Xi,a.constructor,a.id);return o.result?(a.inheritedSelector=null,a.attrs=e,K(s,"duration")||(s.duration=0),a.props=s,a.attributesStaggers=[],a.propsStaggers=[],a.setupDynamicValues(),a.dynamicDurationValue=null,a.passive=!1,a):d(a,o)}return i}(e);return{F:n,d:[{kind:"field",static:!0,key:"Incident",value:function(){return Vt}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"motor-cortex-js-attribute"}},{kind:"field",static:!0,key:"version",value:function(){return Wt}},{kind:"field",static:!0,key:"Channel",value:function(){return Fr}},{kind:"field",static:!0,key:"ClassName",value:function(){return"Incident"}},{kind:"field",static:!0,key:"attrsValidationRules",value:function(){return null}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return Xi}},{kind:"method",decorators:[or],key:"editAttributes",value:function(){}},{kind:"method",decorators:[ur],key:"editProperties",value:function(){}},{kind:"method",decorators:[cr],key:"resize",value:function(){}},{kind:"method",decorators:[sr],key:"clone",value:function(){}},{kind:"method",decorators:[hr],key:"selector",value:function(){}},{kind:"method",decorators:[lr],key:"getElements",value:function(){}},{kind:"method",decorators:[vr],key:"setupDynamicValues",value:function(){}},{kind:"get",key:"duration",value:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:this.propsStaggers.length>0?"dynamic":m(l(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){if(this.propsStaggers.length>0){for(var e=0;e<this.propsStaggers.length;e++)if("repeats"!==this.propsStaggers[e].path){var i=this.propsStaggers[e].stagger.resize(t/this.duration);st(this.props,this.propsStaggers[e].path,i)}this.dynamicDurationValue=t}else g(l(n.prototype),"duration",t,this,!0)}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){var n=this.parentNode,i=n.getLeafPosition(this.id);n.removeIncident(this.id);var r=JSON.parse(JSON.stringify(this[e]));this[e]=t;var s=n.addIncident(this,i);return s.result||(n.removeIncident(this.id),this[e]=r,n.addIncident(this,i)),s}},{kind:"method",key:"detachFromParent",value:function(){m(l(n.prototype),"detachFromParent",this).call(this),this.inheritedSelector=null}},{kind:"method",key:"handleCheckForInvalidSelectors",value:function(){var t=this.selector();return null===t?{id:this.id,ClassName:this.constructor.ClassName,plugin_npm_name:this.constructor.plugin_npm_name,error:"null selector"}:"&"===t.charAt(0)?{id:this.id,ClassName:this.constructor.ClassName,plugin_npm_name:this.constructor.plugin_npm_name,error:"relative selector with no inherited selector",selector:t}:this.bypass()}},{kind:"method",key:"exportDefinition",value:function(){return{ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:this.attrs,props:this.props}}},{kind:"method",key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=JSON.parse(JSON.stringify(this.props));return!1===t&&delete e.id,{Class:this.constructor,attrs:JSON.parse(JSON.stringify(this.attrs)),props:e}}}]}}),ft),ks=function(t,e){return t.startsWith("on")&&"function"==typeof e},bs=function(t){return t.substr(2).toLowerCase()},xs=function(t){return"function"==typeof t};function Cs(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild}function Is(t,e){if(!e)return t;for(var n=0,i=Object.entries(e);n<i.length;n++){var r=y(i[n],2),s=r[0],a=r[1];if(ks(s))t.addEventListener(bs(s),a);else if("class"===s){var o,u=Array.isArray(a)?a:a.split(" ");(o=t.classList).add.apply(o,k(u))}else t.setAttribute(s,a)}return t}var ws=function(){function t(e){if(r(this,t),!K(e,"incident"))return at.error('Journey constructor expects an Incident on its properties on the key "incident"'),!1;this.memory=e.capsuleMemory,this.stations=[],this.incident=e.incident,this.startMillisecond=1*this.incident.runTimeInfo.currentMillisecond,this.startState="".concat(this.incident.runTimeInfo.state),this.incident.stop()}return a(t,[{key:"station",value:function(t){this.stations.length>0&&this.stations[this.stations.length-1],this.stations.push(t),this.incident.playableProgress(t/this.incident.duration,t)}},{key:"destination",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=t?this.station(t):t=this.stations[this.stations.length-1],this.incident.playableProgress(t/this.incident.duration,t),"playing"===this.startState||"blocked"===this.startState&&"playing"===this.incident.statusBeforeBlock?this.incident.play():t>=this.incident.duration?this.incident.complete():this.incident.arm(),this.memory.push(this.exportJourneyLog)}},{key:"exportJourneyLog",value:function(){return{startMillisecond:this.startMillisecond,startState:this.startState,stations:this.stations}}}]),t}(),Es=function(){function t(){r(this,t),this.memory=[]}return a(t,[{key:"startJourney",value:function(t){return t?new ws({incident:t,capsuleMemory:this.memory}):(at.error("startJourney expects an Incident as an argument"),!1)}}]),t}();function As(t){if(K(t,"default")&&(t=t.default),K(t,"npm_name")||(t.npm_name="plugin_".concat((new Date).getTime())),!function(t){K(t,"default")&&(t=t.default);var e=t.npm_name,n=!0;if(K(t,"name")||at.notice("Notice on plugin ".concat(e,'. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin')),K(t,"version")||at.notice("Notice on ".concat(e,". Plugin should always expose its version number on main.js file.\n      Plugin version is missing")),K(t,"incidents")||K(t,"Clip")||(at.error("Error on plugin ".concat(e,'. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".')),n=!1),K(t,"incidents")&&!Array.isArray(t.incidents))at.error("Error on plugin ".concat(e,'. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation')),n=!1;else if(K(t,"incidents"))for(var i=0;i<t.incidents.length;i++){var r=t.incidents[i];G(r.exportable)&&K(r.exportable,"default")&&(r.exportable=r.exportable.default);var s=r.exportable.prototype;s instanceof gr||s instanceof ds||s instanceof Vt||s instanceof Vr||(at.error("Error on plugin ".concat(e,". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                ").concat(r.exportable.constructor.name," doesn't.\nPlease refer to documentation")),n=!1),s instanceof ds&&(K(r,"originalDims")?!1===Z(r.originalDims).result&&(at.error("Error on plugin ".concat(e,". Invalid originalDims value passed on ").concat(r.name)),n=!1):at.log("Warning on plugin ".concat(e,'. It\'s always good to provide originalDims\nwhen exposing Incidents extending DOMClip. By defining their original dims the users\nof your plugin will be able to define the desired dimensions of your Incident by\nthe "containerParams object"'))),K(r,"name")||(at.error("Error on plugin ".concat(e,'. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\nPlease refer to documentation')),n=!1)}return n}(t))return!1;var e={};if(K(t,"Clip"))if(K(t.Clip,"exportable")){var n,i,s,a=(i=n=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(ds),o(n,"Incident",t.Clip.exportable),o(n,"plugin",t.npm_name),o(n,"version",t.version||"*"),o(n,"audio",t.audio||"off"),o(n,"customClip",!0),i);K(t.Clip,"attributesValidationRules")&&(s=ji.compile(t.Clip.attributesValidationRules));e.Clip=function e(n,i){r(this,e);var o,u=n,l=i;if(void 0===i&&(u={},l=n),K(t.Clip,"attributesValidationRules")){var c=s(u);if(c.length>0){for(var h="Error on plugin's \"".concat(t.npm_name,'" Clip instantiation. Errors:'),d=0;d<c.length;d++)h+="\n - ".concat(c[d].message,". ").concat(c[d].actual," provided");return at.error(h),at.log("breaking"),{result:!1,errors:c}}at.log("instantiating"),(o=new a(u,l)).attrsValidationRules=t.Clip.attributesValidationRules,o.attrsValidationMethod=s}else at.log("instantiating"),(o=new a(u,l)).attrsValidationRules=null,at.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name,".").concat(o.constructor.name," doesn't provide it"));return o}}else{var l,c,h=(c=l=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(ds),o(l,"Incident",t.Clip),o(l,"plugin",t.npm_name),o(l,"version",t.version||"*"),o(l,"audio",t.audio||"off"),o(l,"customClip",!0),c);at.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name,".Clip doesn't provide it")),e.Clip=h}var d=Fr;if(K(t,"compositeAttributes")&&(d=function(e){u(i,e);var n=p(i);function i(e){return r(this,i),e.comboAttributes=t.compositeAttributes,n.call(this,e)}return i}(Fr)),K(t,"incidents"))for(var f=function(n){var i,s,a=t.incidents[n].exportable,l=null,c=null,h=!1;if(K(t.incidents[n],"attributesValidationRules")){h=!0;var f=JSON.parse(JSON.stringify(t.incidents[n].attributesValidationRules));K(t.incidents[n].attributesValidationRules,"animatedAttrs")&&(f.initialValues=(i=f.animatedAttrs,function t(e){if(z(e)&&(e={type:e}),e.optional=!0,"object"===e.type)for(var n in e.props)t(e.props[n])}(s=JSON.parse(JSON.stringify(i))),s)),c=f,l=ji.compile(f)}var m,v,g=void 0;if(a.prototype instanceof Vt)v=m=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(ys),o(m,"Incident",a),o(m,"plugin_npm_name",t.npm_name),o(m,"plugin",t.npm_name),o(m,"version",t.version||"*"),o(m,"ClassName",t.incidents[n].name),o(m,"Channel",d),o(m,"audio",t.audio||"off"),o(m,"attrsValidationRules",c),o(m,"attrsValidationMethod",l),g=v;else if(a.prototype instanceof Vr){var y,k;k=y=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(ys),o(y,"Incident",a),o(y,"plugin_npm_name","@kissmybutton/media-playback"),o(y,"plugin",t.npm_name),o(y,"version",t.version||"*"),o(y,"ClassName",t.incidents[n].name),o(y,"Channel",Mr),o(y,"audio",t.audio?t.audio:"off"),o(y,"attrsValidationRules",c),o(y,"attrsValidationMethod",l),g=k}else if(a.prototype instanceof ds){var b,x;x=b=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(a),o(b,"plugin",t.npm_name),o(b,"version",t.version||"*"),o(b,"ClassName",t.incidents[n].name),o(b,"audio",t.audio?t.audio:"on"),o(b,"originalDims",Z(t.incidents[n].originalDims).analysis),o(b,"attrsValidationRules",c),o(b,"attrsValidationMethod",l),o(b,"isAnimation",!0),g=x}else if(a.prototype instanceof gr){var C,I;I=C=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(a),o(C,"plugin",t.npm_name),o(C,"version",t.version||"*"),o(C,"ClassName",t.incidents[n].name),o(C,"attrsValidationRules",c),o(C,"attrsValidationMethod",l),g=I}Object.defineProperty(e,t.incidents[n].name,{enumerable:!0,get:function(){var e=function e(i,s){var a;if(r(this,e),h){var o=l(i);if(o.length>0){for(var u="Error on plugin's \"".concat(t.npm_name,'" "').concat(t.incidents[n].name,'" instantiation. Errors:'),c=0;c<o.length;c++)u+="\n - ".concat(o[c].message,". ").concat(o[c].actual," provided");return at.error(u),{result:!1,errors:o}}}return(a=new g(i,s)).result&&!h&&at.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name," doesn't provide it")),a};return o(e,"targetClass",g),e}})},m=0;m<t.incidents.length;m++)f(m);return e}var Ps={createDOMElement:function(t,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];if(xs(t))return t(n(n({},e),{},{children:r}));for(var a=Is(document.createElement(t),e),o=r.flat(),u=0;u<o.length;u++){var l=o[u];if(!1!==l){var c=G(l)?l:Cs(l.toString());null!==c&&a.appendChild(c)}}return a.outerHTML},easings:Nt,clipFromDefinition:rr},Os=As($r),Ss=Os.Clip,Ts=Os.AudioEffect,_s=Os.AudioPlayback,Ds={version:Wt,Effect:Vt,utils:Ps,HTMLClip:ds,Group:gr,Combo:gs,BrowserClip:os,loadPlugin:As,AudioClip:ps,CoreAudioClip:Ss,AudioPlayback:_s,AudioEffect:Ts,MediaPlayback:Vr,TimeCapsule:Es};t.AudioClip=ps,t.AudioEffect=Ts,t.AudioPlayback=_s,t.BrowserClip=os,t.Combo=gs,t.CoreAudioClip=Ss,t.Effect=Vt,t.Group=gr,t.HTMLClip=ds,t.MediaPlayback=Vr,t.TimeCapsule=Es,t.default=Ds,t.loadPlugin=As,t.utils=Ps,Object.defineProperty(t,"__esModule",{value:!0})}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(0)):undefined}(this,(function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function n(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?t(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l="--mc-player",r="volume-change",a="mute-change",c="speed-change",p="loop-change",d="scale-change",u="show-volume-change",m="show-preview-change",h="state-change",v="duration-change",g="mouseup",f="mousedown",y="touchstart",b="mousemove",w="touchend",x="touchmove",B={play:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>play</title>\n<path fill="#999" d="M27.558 13.624l-21.827-13.232c-0.402-0.248-0.89-0.395-1.411-0.395-1.502 0-2.72 1.218-2.72 2.72 0 0.002 0 0.004 0 0.006v-0 26.461c0 0.001 0 0.002 0 0.003 0 1.502 1.218 2.72 2.72 2.72 0.522 0 1.009-0.147 1.423-0.401l-0.012 0.007 21.827-13.232c0.792-0.485 1.313-1.346 1.313-2.328s-0.521-1.843-1.301-2.321l-0.012-0.007z"></path>\n</svg>',pause:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>pause</title>\n<path d="M6.059 4.639h8.521v22.722h-8.521zM18.84 4.639h8.521v22.722h-8.521z"></path>\n</svg>',"expand-full":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>expand-full</title>\n<path fill="#999" d="M31.667 3.271c-0.004-1.619-1.315-2.93-2.934-2.934h-7.642c-0.921 0-1.667 0.747-1.667 1.667s0.747 1.667 1.667 1.667h6.909c0.185 0 0.333 0.148 0.333 0.332v4.359c0 0.921 0.747 1.667 1.667 1.667s1.667-0.746 1.667-1.667v0-5.091zM0.333 8.362c0 0.921 0.746 1.667 1.667 1.667s1.667-0.746 1.667-1.667v0-4.362c0-0.001 0-0.001 0-0.002 0-0.184 0.148-0.333 0.332-0.333h6.909c0.898-0.029 1.614-0.764 1.614-1.667s-0.717-1.637-1.612-1.666l-0.003-0h-7.635c-1.619 0.005-2.931 1.315-2.934 2.936l-0.007 5.095zM31.667 28.726v-5.091c0-0.921-0.747-1.667-1.667-1.667s-1.667 0.747-1.667 1.667v0 4.365c0 0.185-0.148 0.333-0.332 0.333h-6.909c-0.921 0-1.667 0.747-1.667 1.667s0.747 1.667 1.667 1.667v0h7.635c1.624-0.002 2.941-1.319 2.941-2.942zM0.333 28.726c0.004 1.621 1.319 2.934 2.941 2.934 0 0 0 0 0 0h7.635c0.016 0.001 0.034 0.001 0.053 0.001 0.921 0 1.667-0.747 1.667-1.667s-0.746-1.667-1.667-1.667c-0.019 0-0.037 0-0.056 0.001l0.003-0h-6.909c-0 0-0 0-0 0-0.182 0-0.33-0.145-0.333-0.326v-4.366c0-0.921-0.747-1.667-1.667-1.667s-1.667 0.747-1.667 1.667v0 5.091z"></path>\n<path fill="#999" d="M10.321 10.848h11.357c1.818 0 3.291 1.473 3.291 3.291v3.72c0 1.818-1.473 3.291-3.291 3.291h-11.357c-1.818 0-3.291-1.473-3.291-3.291v-3.72c0-1.818 1.473-3.291 3.291-3.291z"></path>\n</svg>',"angle-left":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32">\n<title>angle-left</title>\n<path d="M1.981 14.938l8.5-8.5c0.588-0.588 1.537-0.588 2.119 0l1.412 1.412c0.588 0.588 0.588 1.537 0 2.119l-6.019 6.031 6.025 6.025c0.588 0.587 0.588 1.538 0 2.119l-1.412 1.419c-0.588 0.587-1.537 0.587-2.119 0l-8.5-8.5c-0.594-0.587-0.594-1.537-0.006-2.125z"></path>\n</svg>',"angle-right":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32">\n<title>angle-right</title>\n<path d="M14.019 17.063l-8.5 8.5c-0.588 0.587-1.538 0.587-2.119 0l-1.413-1.413c-0.587-0.587-0.587-1.538 0-2.119l6.019-6.031-6.025-6.025c-0.587-0.588-0.587-1.537 0-2.119l1.413-1.419c0.587-0.588 1.538-0.588 2.119 0l8.5 8.5c0.594 0.588 0.594 1.538 0.006 2.125z"></path>\n</svg>',settings:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>settings</title>\n<path fill="#999" d="M29.999 12.665h-2.483c-0.275-0.938-0.621-1.751-1.048-2.512l0.031 0.060 1.757-1.755c0.362-0.362 0.587-0.862 0.587-1.415s-0.224-1.053-0.587-1.415l-1.886-1.883c-0.362-0.362-0.862-0.586-1.415-0.586s-1.053 0.224-1.415 0.586l-1.757 1.755c-0.701-0.397-1.514-0.743-2.366-0.996l-0.084-0.021v-2.483c0.002-1.107-0.894-2.001-1.999-2.001h-2.668c-1.105 0-1.999 0.896-1.999 2.001v2.483c-0.938 0.275-1.751 0.621-2.513 1.048l0.060-0.031-1.757-1.755c-0.362-0.362-0.862-0.587-1.415-0.587s-1.053 0.224-1.415 0.587l-1.886 1.886c-0.362 0.362-0.586 0.862-0.586 1.415s0.224 1.053 0.586 1.415v0l1.758 1.755c-0.431 0.775-0.771 1.598-1.017 2.451h-2.483c-1.107-0.002-2.001 0.894-2.001 1.999v2.668c0 1.105 0.896 1.999 2.001 1.999h2.483c0.246 0.854 0.586 1.676 1.017 2.452l-1.762 1.758c-0.362 0.362-0.586 0.862-0.586 1.415s0.224 1.053 0.586 1.415v0l1.886 1.885c0.368 0.348 0.866 0.563 1.415 0.563s1.047-0.214 1.416-0.564l-0.001 0.001 1.757-1.757c0.778 0.429 1.6 0.771 2.454 1.019v2.479c0 1.105 0.894 2.001 1.999 2.001h2.668c1.105 0 1.999-0.896 1.999-2.001v-2.479c0.852-0.248 1.676-0.589 2.452-1.017l1.757 1.757c0.362 0.362 0.862 0.586 1.415 0.586s1.053-0.224 1.415-0.586v0l1.885-1.886c0.362-0.362 0.586-0.862 0.586-1.414s-0.224-1.052-0.586-1.414l-1.757-1.757c0.431-0.776 0.771-1.6 1.017-2.452h2.483c0 0 0.001 0 0.002 0 1.105 0 2.001-0.896 2.001-2.001 0-0.002 0-0.004 0-0.005v0-2.663c0-1.105-0.896-1.999-2.001-1.999zM16 22.668c-3.682 0-6.666-2.985-6.666-6.666s2.985-6.666 6.666-6.666v0c3.682 0 6.666 2.985 6.666 6.666s-2.985 6.666-6.666 6.666v0z"></path>\n</svg>',loop:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>loop</title>\n<path fill="#999" d="M22.364 21.968h-0.631c-0.92 0-1.667 0.746-1.667 1.667s0.746 1.667 1.667 1.667h0.637c0.013 0 0.028 0 0.044 0 5.113 0 9.259-4.145 9.259-9.259 0-4.668-3.454-8.529-7.946-9.166l-0.049-0.006c-0.158-0.028-0.276-0.164-0.277-0.328v-2.636c-0-0.92-0.746-1.666-1.667-1.666-0.357 0-0.689 0.112-0.96 0.304l0.005-0.003-6.371 4.455c-0.432 0.305-0.711 0.803-0.711 1.365 0 0.92 0.746 1.667 1.667 1.667 0 0 0 0 0 0h6.352c3.772 0 6.617 2.567 6.617 5.971-0.004 3.295-2.674 5.966-5.969 5.969h-0zM8.329 25.127c0.16 0.027 0.277 0.165 0.277 0.328v2.635c0 0.001 0 0.001 0 0.002 0 0.92 0.746 1.665 1.665 1.665 0.358 0 0.69-0.113 0.961-0.305l-0.005 0.003 6.364-4.453c0.432-0.306 0.71-0.803 0.71-1.365 0-0.92-0.746-1.667-1.666-1.668h-6.352c-3.772 0-6.617-2.567-6.617-5.968 0.002-3.296 2.673-5.968 5.969-5.972h0.638c0.92 0 1.667-0.746 1.667-1.667s-0.746-1.667-1.667-1.667v0h-0.637c-0.010-0-0.022-0-0.034-0-5.114 0-9.26 4.146-9.26 9.26 0 4.665 3.45 8.524 7.937 9.166l0.049 0.006z"></path>\n</svg>',"volume-on":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>volume-on</title>\n<path d="M26.107 2.991l-3.729 3.185c2.867 2.354 4.694 5.879 4.694 9.824s-1.827 7.47-4.694 9.824l3.729 3.185c3.612-3.226 5.893-7.852 5.893-13.009s-2.281-9.783-5.893-13.009zM19.861 8.326l-3.876 3.312c1.692 0.762 3.038 2.423 3.038 4.362s-1.346 3.6-3.038 4.362l3.876 3.312c2.379-1.756 4.028-4.535 4.028-7.674s-1.649-5.918-4.028-7.674zM12.143 5.399l-7.143 5.601h-3c-1.478 0-2 0.539-2 2v6c0 1.461 0.553 2 2 2h3l7.143 5.595c0.857 0.553 1.85 0.727 1.85-0.823v-19.55c0-1.55-0.993-1.376-1.85-0.823z"></path>\n</svg>',"volume-off":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>volume-off</title>\n<path d="M27.397 16.001l4.134-4.144c0.625-0.627 0.625-1.641 0-2.267l-1.132-1.134c-0.625-0.626-1.638-0.626-2.263 0l-4.134 4.144-4.133-4.141c-0.625-0.626-1.638-0.626-2.263 0l-1.132 1.134c-0.625 0.626-0.625 1.641 0 2.267l4.134 4.142-4.131 4.142c-0.625 0.626-0.625 1.641 0 2.267l1.132 1.134c0.625 0.626 1.638 0.626 2.263 0l4.131-4.141 4.133 4.14c0.625 0.627 1.638 0.627 2.263 0l1.132-1.134c0.625-0.626 0.625-1.641 0-2.267l-4.134-4.141zM12.148 5.399l-7.146 5.603h-3.001c-1.479 0-2.001 0.539-2.001 2.001l-0 2.951 0 3.051c0 1.461 0.553 2.001 2.001 2.001h3.001l7.146 5.597c0.857 0.553 1.851 0.727 1.851-0.823v-19.556c-0-1.55-0.994-1.376-1.851-0.823z"></path>\n</svg>',"donkeyclip-logo":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>donkeyclip-logo</title>\n<path fill="#777" d="M25.811 3.454v11.010h-3.479c-0.696-2.447-2.974-4.246-5.638-4.246-3.238 0-5.877 2.638-5.877 5.877s2.638 5.877 5.877 5.877c2.686 0 4.942-1.799 5.638-4.246h3.334c-0.767 4.246-4.485 7.509-8.972 7.509-5.014 0-9.115-4.078-9.115-9.115 0-5.014 4.078-9.115 9.115-9.115 2.231 0 4.294 0.815 5.877 2.159v-7.652c-1.992-0.912-4.222-1.415-6.572-1.415-8.779 0-15.904 7.125-15.904 15.904s7.125 15.904 15.904 15.904c8.779 0 15.904-7.125 15.904-15.904 0.024-5.109-2.375-9.644-6.093-12.546z"></path>\n</svg>',spinner:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>spinner</title>\n<path fill="#999" d="M16 0.43c0.992 0 1.796 1.287 1.796 2.875v1.437c0 1.588-0.804 2.875-1.796 2.875s-1.796-1.287-1.796-2.875v-1.437c0-1.588 0.804-2.875 1.796-2.875z"></path>\n<path fill="#999" d="M23.785 2.516c0.859 0.496 0.913 2.013 0.119 3.388l-0.718 1.245c-0.794 1.374-2.133 2.087-2.993 1.592s-0.913-2.013-0.119-3.388l0.718-1.245c0.794-1.374 2.133-2.087 2.993-1.592z"></path>\n<path fill="#999" d="M29.484 8.215c0.496 0.859-0.216 2.199-1.592 2.993l-1.245 0.718c-1.374 0.794-2.892 0.741-3.388-0.119s0.216-2.199 1.592-2.993l1.245-0.718c1.374-0.794 2.892-0.741 3.388 0.119z"></path>\n<path fill="#999" d="M31.57 16c0 0.992-1.287 1.796-2.875 1.796h-1.437c-1.588 0-2.875-0.804-2.875-1.796s1.287-1.796 2.875-1.796h1.437c1.588 0 2.875 0.804 2.875 1.796z"></path>\n<path fill="#999" d="M29.484 23.785c-0.496 0.859-2.013 0.913-3.388 0.119l-1.245-0.718c-1.374-0.794-2.087-2.133-1.592-2.993s2.013-0.913 3.388-0.119l1.245 0.718c1.374 0.794 2.087 2.133 1.592 2.993z"></path>\n<path fill="#999" d="M23.785 29.484c-0.859 0.496-2.199-0.216-2.993-1.592l-0.718-1.245c-0.794-1.374-0.741-2.892 0.119-3.388s2.199 0.216 2.993 1.592l0.718 1.245c0.794 1.374 0.741 2.892-0.119 3.388z"></path>\n<path fill="#999" d="M16 31.57c-0.992 0-1.796-1.287-1.796-2.875v-1.437c0-1.588 0.804-2.875 1.796-2.875s1.796 1.287 1.796 2.875v1.437c0 1.588-0.804 2.875-1.796 2.875z"></path>\n<path fill="#999" d="M8.215 29.484c-0.859-0.496-0.913-2.013-0.119-3.388l0.718-1.245c0.794-1.374 2.133-2.087 2.993-1.592s0.913 2.013 0.119 3.388l-0.718 1.245c-0.794 1.374-2.133 2.087-2.993 1.592z"></path>\n<path fill="#999" d="M2.516 23.785c-0.496-0.859 0.216-2.199 1.592-2.993l1.245-0.718c1.374-0.794 2.892-0.741 3.388 0.119s-0.216 2.199-1.592 2.993l-1.245 0.718c-1.374 0.794-2.892 0.741-3.388-0.119z"></path>\n<path fill="#999" d="M0.43 16c0-0.992 1.287-1.796 2.875-1.796h1.437c1.588 0 2.875 0.804 2.875 1.796s-1.287 1.796-2.875 1.796h-1.437c-1.588 0-2.875-0.804-2.875-1.796z"></path>\n<path fill="#999" d="M2.516 8.215c0.496-0.859 2.013-0.913 3.388-0.119l1.245 0.718c1.374 0.794 2.087 2.133 1.592 2.993s-2.013 0.913-3.388 0.119l-1.245-0.718c-1.374-0.794-2.087-2.133-1.592-2.993z"></path>\n<path fill="#999" d="M8.215 2.516c0.859-0.496 2.199 0.216 2.993 1.592l0.718 1.245c0.794 1.374 0.741 2.892-0.119 3.388s-2.199-0.216-2.993-1.592l-0.718-1.245c-0.794-1.374-0.741-2.892 0.119-3.388z"></path>\n</svg>',"check-solid":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>check-solid</title>\n<path d="M10.869 27.463l-10.4-10.4c-0.625-0.625-0.625-1.638 0-2.263l2.263-2.263c0.625-0.625 1.638-0.625 2.263 0l7.006 7.006 15.006-15.006c0.625-0.625 1.638-0.625 2.263 0l2.263 2.263c0.625 0.625 0.625 1.638 0 2.263l-18.4 18.4c-0.625 0.625-1.638 0.625-2.263-0z"></path>\n</svg>'};function M(e,t){return e.getElementsByClassName(t)[0]}function k(e){return document.createElement(e)}function C(){var e;return(e=document).addEventListener.apply(e,arguments)}function L(){var e;return(e=document).removeEventListener.apply(e,arguments)}var P=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");function S(e){var t,n=e.match(P)[0],s=e.substring(n.length);if("number"==typeof(t=Number(n))&&isFinite(t)&&("%"!==s||"px"!==s))return{number:Number(n),unit:s}}function E(e,t){var n,s,o,i,l=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object.prototype.hasOwnProperty.call(e,"width")&&(o=S(e.width)),Object.prototype.hasOwnProperty.call(e,"height")&&(i=S(e.height));var r=1,a=1;"px"===(null===(n=o)||void 0===n?void 0:n.unit)&&o.number!==t.width&&(r=t.width/o.number),"px"===(null===(s=i)||void 0===s?void 0:s.unit)&&i.number!==t.height&&(a=t.height/i.number);var c=l?a>r:a<=r,p=c?a:r,d={};if(null!==o){var u=o.number*p;"px"!==o.unit&&(u*=t.width/100);var m=t.width-u;d.left=m/2}if(null!==o){var h=i.number*p;"px"!==i.unit&&(h*=t.height/100);var v=t.height-h;d.top=v/2}return{scale:p,position:d}}function T(e,t){document.addEventListener(g,e,!1),document.addEventListener(w,e,!1),document.addEventListener(b,t,!1),document.addEventListener(x,t,!1)}function z(e,t){document.removeEventListener(g,e,!1),document.removeEventListener(w,e,!1),document.removeEventListener(b,t,!1),document.removeEventListener(x,t,!1)}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.addEventListener(f,e,{passive:n},!1),t.addEventListener(y,e,{passive:n},!1)}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;t.removeEventListener(f,e,!1),t.removeEventListener(y,e,!1)}function V(e,t,n){t&&(e.classList.remove("icon-".concat(t)),e.innerHTML=""),n&&(e.classList.add("icon-".concat(n)),e.innerHTML=B[n])}var F=function(e){e.elements={},D(e);var t,n=e.elements.mcPlayer;e.elements.pointerEventPanel=M(n,"--mcp-pointer-events-panel"),e.elements.listenerHelper=M(n,"--mcp-listener-helper"),e.elements.loopBar=M(n,"--mcp-loopbar"),e.elements.totalBar=M(n,"--mcp-totalbar"),e.elements.indicator=M(n,"--mcp-indicator"),e.elements.loopButton=M(n,"--mcp-loop-btn"),e.elements.volumeBar=M(n,"--mcp-volumebar"),e.elements.totalTime=M(n,"--mcp-time-total"),e.elements.volumeControl=M(n,"--mcp-volume"),e.elements.volumeBtn=M(n,"--mcp-volume-btn"),e.elements.runningBar=M(n,"--mcp-runningbar"),e.elements.loopBarEnd=M(n,"--mcp-loopbar-end"),e.elements.statusButton=M(n,"--mcp-status-btn"),e.elements.speedBar=M(n,"--mcp-speed-values"),e.elements.currentTime=M(n,"--mcp-time-current"),e.elements.timeDisplay=M(n,"--mcp-time-display"),e.elements.speedButtonShow=M(n,"--mcp-speed-btn-show"),e.elements.speedButtonHide=M(n,"--mcp-speed-btn-hide"),e.elements.speedCurrent=M(n,"--mcp-speed-current"),e.elements.loopBarStart=M(n,"--mcp-loopbar-start"),e.elements.volumeCursor=M(n,"--mcp-volume-cursor"),e.elements.settingsButton=M(n,"--mcp-settings-btn"),e.elements.donkeyclipButton=M(n,"--mcp-dc-btn"),e.elements.timeSeparator=M(n,"--mcp-time-separator"),e.elements.settingsPanel=M(n,"--mcp-settings-panel"),e.elements.settingsMainPanel=M(n,"--mcp-main-settings"),e.elements.fullScreenButton=M(n,"--mcp-full-screen-btn"),e.elements.volumeBarHelper=M(n,"--mcp-volumebar"),e.elements.volumeBarActive=M(n,"--mcp-volumebar-color-active"),e.elements.settingsSpeedPanel=M(n,"--mcp-speed-settings"),e.elements.settingsShowVolume=M(n,"--mcp-settings-volume"),e.elements.settingsShowPreview=M(n,"--mcp-settings-preview"),e.elements.settingsPointerEvents=M(n,"--mcp-settings-pointer-events"),e.elements.settingsShowIndicator=M(n,"--mcp-settings-indicator"),e.elements.settingsSpeedButtonShow=M(n,"--mcp-settings-speed-show"),e.elements.settingsSpeedButtonHide=M(n,"--mcp-settings-speed-hide"),e.elements.controls=M(n,"--mcp-controls"),e.elements.previewHost=M(n,"--mcp-preview-host"),e.elements.preview=M(n,"--mcp-preview"),e.elements.volumeCheckbox=M(n,"--mcp-show-volume-checkbox"),e.elements.showIndicatorCheckbox=M(n,"--mcp-show-indicator-checkbox"),e.elements.showPreviewCheckbox=M(n,"--mcp-show-preview-checkbox"),e.elements.showVolumeCheckbox=M(n,"--mcp-show-volume-checkbox"),e.elements.showPointerEventsCheckbox=M(n,"--mcp-show-pointer-events-checkbox"),e.elements.previewMillisecond=M(n,"--mcp-preview-millisecond"),e.elements.leftButtons=M(n,"--mcp-left-buttons"),(t=e.elements).loopButton.innerHTML=B.loop,t.volumeBtn.innerHTML=B["volume-on"],t.statusButton.innerHTML=B.play,t.settingsButton.innerHTML=B.settings,t.donkeyclipButton.innerHTML=B["donkeyclip-logo"],t.fullScreenButton.innerHTML=B["expand-full"],t.fullScreenButton.innerHTML=B["expand-full"],t.speedButtonShow.innerHTML=B["angle-right"],t.speedButtonHide.innerHTML=B["angle-left"],W(e),O(e),j(e)},D=function(e){var t=e.clip.props.host;if(t.offsetWidth||(t.style.width=e.clip.props.containerParams.width),t.offsetHeight||(t.style.height=e.clip.props.containerParams.height),t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center",t.style.overflow="hidden",e.clip.props.host.style.position="relative",e.clip.props.host.style.zIndex=0,e.elements.mcPlayer=k("div"),e.elements.mcPlayer.id="".concat(e.name),e.elements.mcPlayer.className="".concat(e.className),e.elements.mcPlayer.innerHTML='<div class="--mcp-background"></div>\n<div class="--mcp-context">\n    <div class="--mcp-pointer-events-panel"></div>\n    <div class="--mcp-listener-helper"></div>\n    <div class="--mcp-controls">\n        <div class="--mcp-grad"></div>\n        <div class="--mcp-progressbar">\n            <div class="--mcp-preview">\n                <div class="--mcp-prevent-point-events"></div>\n                <div class="--mcp-preview-host"> </div>\n                <div class="--mcp-preview-millisecond">00:00</div>\n            </div>\n            <div class="--mcp-totalbar">\n                <div class="--mcp-loopbar">\n                    <div class="--mcp-loopbar-color"></div>\n                    <div class="--mcp-loop-boundaries --mcp-loopbar-start">\n                    </div>\n                    <div class="--mcp-loop-boundaries --mcp-loopbar-end">\n                    </div>\n                    <div class="--mcp-runningbar">\n                        <div class="--mcp-cursor"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="--mcp-buttons">\n            <div class="--mcp-left-buttons">\n                <div class="--mcp-status">\n                    <span class="--mcp-btn --mcp-status-btn icon-play"></span>\n                    <span class="--mcp-indicator">i</span>\n                </div>\n                <div class="--mcp-volume">\n                    <div class="--mcp-btn --mcp-volume-btn icon-volume-on"></div>\n                    <div class="--mcp-volumebar">\n                        <div class="--mcp-volumebar-color">\n                            <div class="--mcp-volumebar-color-active">\n                                <div class="--mcp-volume-cursor"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="--mcp-time-display">\n                    <span class="--mcp-time-current">00:00</span>\n                    <span class="--mcp-time-separator">/</span>\n                    <span class="--mcp-time-total">00:00</span>\n                </div>\n            </div>\n            <div class="--mcp-right-buttons">\n                <div class="--mcp-loop-btn-container">\n                    <div class="--mcp-btn --mcp-loop-btn icon-loop"></div>\n                </div>\n                <div class="--mcp-btn --mcp-settings-btn icon-settings"></div>\n                <div class="--mcp-btn --mcp-dc-btn icon-donkeyclip-logo"></div>\n                <div class="--mcp-btn --mcp-full-screen-btn icon-expand-full">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="--mcp-settings-panel">\n        <ul class="--mcp-main-settings">\n            <li class="--mcp-settings-pointer-events">\n                <p>Pointer events</p>\n                <div>\n                    <div class="switch settings-switch">\n                        <input class="--mcp-show-pointer-events-checkbox" type="checkbox">\n                        <span class="slider round"></span>\n                    </div>\n                </div>\n            </li>\n            <li class="--mcp-settings-preview">\n                <p>Show preview</p>\n                <div>\n                    <div class="switch settings-switch">\n                        <input class="--mcp-show-preview-checkbox" type="checkbox">\n                        <span class="slider round"></span>\n                    </div>\n                </div>\n            </li>\n            <li class="--mcp-settings-indicator">\n                <p>Show indicator</p>\n                <div>\n                    <div class="switch settings-switch">\n                        <input class="--mcp-show-indicator-checkbox" type="checkbox">\n                        <span class="slider round"></span>\n                    </div>\n                </div>\n            </li>\n            <li class="--mcp-settings-volume">\n                <p>Show volume</p>\n                <div>\n                    <div class="switch settings-switch">\n                        <input class="--mcp-show-volume-checkbox" type="checkbox">\n                        <span class="slider round"></span>\n                    </div>\n                </div>\n            </li>\n            <li class="--mcp-settings-speed-show">\n                <p>Playback speed</p>\n                <div>\n                    <span class="--mcp-speed-current"></span>\n                    <div class="--mcp-btn --mcp-speed-btn --mcp-speed-btn-show icon-angle-right"></div>\n                </div>\n            </li>\n        </ul>\n        <ul class="--mcp-speed-settings">\n            <li class="--mcp-settings-speed-hide">\n                <div class="--mcp-btn --mcp-speed-btn --mcp-speed-btn-hide icon-angle-left"></div>\n                <p class="--mcp-speed-runtime">Playback speed</p>\n            </li>\n            <li class="--mcp-no-hover">\n                <ul class="--mcp-speed-values"></ul>\n            </li>\n        </ul>\n    </div>\n</div>',"string"==typeof e.options.host){var n=document.querySelectorAll(e.options.host);for(var s in n)isNaN(s)||n[s].appendChild(e.elements.mcPlayer)}else e.options.host.appendChild(e.elements.mcPlayer)},W=function(e){e.elements.volumeBarActive.style.width="".concat(100*e.settings.volume,"%"),e.elements.currentTime.innerHTML=e.timeFormat(0),e.elements.totalTime.innerHTML=e.timeFormat(e.clip.duration),e.elements.timeSeparator.innerHTML="/",e.elements.settingsPanel.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.options.showIndicator?(e.elements.indicator.style.display=void 0,e.elements.statusButton.style.width="35px",e.elements.statusButton.style.height="20px",e.elements.statusButton.style.bottom="5px"):e.elements.indicator.style.display="none",e.elements.indicator.innerHTML=e.clip.runTimeInfo.state,e.elements.settingsSpeedPanel.style.display="none",e.elements.loopBarStart.style.left="0%",e.elements.loopBarStart.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.elements.loopBarEnd.style.left="100%",e.elements.loopBarEnd.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.elements.preview.classList.add("m-fadeOut"),e.elements.volumeCheckbox.checked=e.options.showVolume,e.elements.showIndicatorCheckbox.checked=e.options.showIndicator,e.elements.showPreviewCheckbox.checked=e.options.preview,e.elements.showPointerEventsCheckbox.checked=e.options.pointerEvents,e.options.pointerEvents?e.elements.pointerEventPanel.style.pointerEvents="none":e.elements.pointerEventPanel.style.pointerEvents="auto",e.options.showVolume||e.elements.volumeControl.classList.toggle("m-fadeOut")},O=function(e){var t=function(t){if(0==e.options.speedValues[t])return"continue";var n="check-solid",s="--mcp-selected",o=k("li");o.className="--mcp-speed-value",o.dataset.speedValue=e.options.speedValues[t];var i=document.createElement("span");o.append(i);var l=k("p"),r=1==e.options.speedValues[t];l.innerHTML=r?"Normal":e.options.speedValues[t],l.dataset.zone=t,l.classList.add("--mcp-speed-value-item"),e.options.speedValues[t]==e.clip.speed&&(V(i,null,n),l.classList.add(s)),o.append(l),e.elements.speedBar.append(o),o.onclick=function(){e.options.speed=e.options.speedValues[t],e.clip.speed=e.options.speedValues[t];var o=1==e.clip.speed;e.elements.speedCurrent.innerHTML=o?"Normal":e.clip.speed,V(M(e.elements.mcPlayer,"icon-check-solid"),n),V(i,null,n),M(e.elements.mcPlayer,s).classList.remove(s),l.classList.add(s)}};for(var n in e.options.speedValues)t(n)},j=function(e){!1===e.options.buttons.fullScreen&&e.elements.fullScreenButton.remove(),!1===e.options.buttons.settings&&e.elements.settingsButton.remove(),!1===e.options.buttons.donkeyclip&&e.elements.donkeyclipButton.remove(),!1===e.options.buttons.loop&&e.elements.loopButton.remove()},A=function(e){e.elements.donkeyclipButton.addEventListener("click",(function(){var t,n=(t=(new Date).getTime(),"xxxxxxxx-xxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0;t=Math.floor(t/16);var s=Math.random()>.5,o=("x"==e?n:3&n|8).toString(16);return s?o.toUpperCase():o}))),s=window.open("https://donkeyclip.com?u=".concat(n)),o=e.clip.exportDefinition(),i=e.clipClass;window.addEventListener("message",(function(e){e.data===n&&s.postMessage(JSON.stringify({definition:o,clipClass:i,u:n}),"*")}),!1)}))},N="--mcp-force-show-controls",U="playing",X="volume-off",J="volume-on",R='.--mc-player.theme-default{\n    --activeColor:136,136,136;\n    --defaultColor:136,136,136;\n    --backgroundColor:245,245,245,1;\n    --loopBarColor:rgba(var(--activeColor),.2);\n    --grad-display:none;\n}\n\n.--mc-player.theme-dark{\n    --activeColor:136,136,136;\n    --defaultColor:136,136,136;\n    --backgroundColor:0,0,0,1;\n    --loopBarColor:rgba(var(--activeColor),.2);\n    --grad-display:none;\n}\n\n.--mc-player.theme-whiteGold{\n    --activeColor:161,127,26;\n    --defaultColor:136,136,136;\n    --backgroundColor:245,245,245,1;\n    --loopBarColor:rgba(var(--activeColor),.2);\n    --grad-display:none;\n}\n\n.--mc-player.theme-darkGold{\n    --activeColor:161,127,26;\n    --defaultColor:136,136,136;\n    --backgroundColor:0,0,0,1;\n    --loopBarColor:rgba(var(--activeColor),.2);\n    --grad-display:none;\n}\n.--mc-player.theme-transparent{\n    --activeColor:255,0,0;\n    --defaultColor:239,238,236;\n    --backgroundColor:0,0,0,0;\n    --loopBarColor:rgba(var(--defaultColor),.2);\n    --grad-display:block;\n}\n\n.--mc-player.theme-green{\n    --activeColor:0,184,139;\n    --defaultColor:153,153,153;\n    --backgroundColor:20,20,22,1;\n    --loopBarColor:rgba(var(--activeColor),.2);\n    --grad-display:none;\n}\n.--mc-player.theme-blue{\n    --activeColor:0,153,225;\n    --defaultColor:153,153,153;\n    --backgroundColor:20,20,22,1;\n    --loopBarColor:rgba(var(--activeColor),.2);\n    --grad-display:none;\n}\n.--mc-player *{\n    color: rgb(var(--defaultColor));\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    font-size:13px;\n    cursor: default;\n    user-select: none;\n}\n.--mc-player svg{\n    width: 22px;\n}\n.--mcp-settings-panel svg{\n    width: 10px;\n}\n.--mc-player svg,\n.--mc-player svg *{\n    fill: rgb(var(--defaultColor)) !important;\n\n}\n\n.--mc-player {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top:0px;\n    left: 0px;\n    pointer-events: none;\n}\n\n.--mc-player * {\n    box-sizing: border-box;\n}\n\n.--mcp-background,\n.--mcp-context {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    pointer-events: none;\n}\n.--mcp-background{\n    background: black;\n    z-index: -1000;\n}\n\n.--mcp-pointer-events-panel {\n    width: 100%;\n    min-height: calc(100% - 44px);\n}\n\n.--mcp-pointer-events-panel.loading{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba(0,0,0,0.8)\n}\n.--mcp-pointer-events-panel.loading svg {\n    animation:spin 4s linear infinite;\n}\n\n@keyframes spin { 100% { transform:rotate(360deg); } }\n\n.--mcp-grad {\n    display: var(--grad-display);\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    height: 200px;\n    z-index: 0;\n    pointer-events: none !important;\n    background-image: linear-gradient(rgba(0, 0, 0, 00.001),\n            rgba(0, 0, 0, 00.004),\n            rgba(0, 0, 0, 00.007),\n            rgba(0, 0, 0, 00.01),\n            rgba(0, 0, 0, 0.04),\n            rgba(0, 0, 0, 0.07),\n            rgba(0, 0, 0, 0.1),\n            rgba(0, 0, 0, 0.15),\n            rgba(0, 0, 0, 0.2),\n            rgba(0, 0, 0, 0.25),\n            rgba(0, 0, 0, 0.3),\n            rgba(0, 0, 0, 0.35),\n            rgba(0, 0, 0, 0.4),\n            rgba(0, 0, 0, 0.45),\n            rgba(0, 0, 0, 0.5),\n            rgba(0, 0, 0, 0.55),\n            rgba(0, 0, 0, 0.6),\n            rgba(0, 0, 0, 0.65),\n            rgba(0, 0, 0, 0.7),\n            rgba(0, 0, 0, 0.75),\n            rgba(0, 0, 0, 0.8),\n            rgba(0, 0, 0, 0.88));\n}\n\n.--mc-player:hover .--mcp-controls{\n    opacity: 1 !important;\n}\n.--mcp-controls:active {\n    opacity: 1 !important;\n}\n.--mcp-controls {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    z-index: 1;\n    background: rgba(var(--backgroundColor));\n    height: 44px;\n    padding: 0 15px;\n    opacity: 0;\n    transition: all ease .2s;\n    pointer-events: auto;\n}\n.--mcp-force-show-controls{\n    opacity: 1 !important;\n}\n\n.--mcp-progressbar {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.--mcp-totalbar,\n.--mcp-loopbar,\n.--mcp-runningbar {\n    position: relative;\n    height: 5px;\n}\n\n.--mcp-cursor {\n    width: 14px;\n    height: 14px;\n    background-color: rgb(var(--activeColor));\n    border-radius: 100%;\n    position: absolute;\n    top: -5px;\n    right: -8px;\n    z-index: 10;\n}\n\n.--mcp-totalbar {\n    min-width: 100%;\n    background-color: rgba(var(--defaultColor),0.3);\n}\n\n.--mcp-loopbar {\n    width: 100%;\n    padding: 10px 0px;\n    top: -10px;\n    position: relative;\n}\n.--mcp-loopbar-color{\n    position: absolute;\n    left: 0px;\n    bottom: 5px;\n    background-color: var(--loopBarColor);\n    width: 100%;\n    height: 5px;\n}\n.--mcp-runningbar {\n    background-color: rgb(var(--activeColor));\n    width: 0px;\n}\n\n.--mcp-buttons,\n.--mcp-left-buttons,\n.--mcp-right-buttons,\n.--mcp-left-buttons>div,\n.--mcp-right-buttons>div {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n\n}\n\n.--mcp-buttons,\n.--mcp-left-buttons,\n.--mcp-right-buttons {\n    flex: 1;\n    height: 100%;\n    gap:20px;\n}\n\n\n.--mcp-left-buttons {\n    justify-content: flex-start;\n}\n\n.--mcp-right-buttons {\n    justify-content: flex-end;\n}\n\n.--mcp-preview {\n    min-width: 100px;\n    min-height: 100px;\n    background-color: black;\n    position: absolute;\n    bottom: 50px;\n    border: 3px solid;\n    display: flex;\n    box-sizing: content-box;\n}\n.--mcp-prevent-point-events{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n}\n.--mcp-preview-host {\n    flex: 1;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n}\n\n.--mcp-preview-millisecond {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: -24px;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.--mcp-loop-boundaries{\n    position: relative;\n}\n.--mcp-loop-boundaries:after {\n    content:"";\n    top:-4px;\n    left: -6px;\n    width: 13px;\n    height: 13px;\n    background-color: #aeaeae;\n    position: absolute;\n    border-radius: 100%;\n    z-index: 100;\n}\n.--mcp-loopbar-start{\n    left: -5px;\n}\n.--mcp-loopbar-end{\n    right: 5px;\n}\n.--mcp-loopbar,\n.--mcp-loopbar-color,\n.--mcp-runningbar,\n.--mcp-status-btn,\n.--mcp-loop-boundaries,\n.--mcp-cursor,\n.--mcp-btn,\n.--mcp-volume *,\n.--mc-player svg,\n.--mc-player svg *\n{\n    cursor: pointer;\n}\n.--mcp-btn{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.--mcp-status-btn{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 3px;\n}\n.--mcp-indicator{\n    font-size: 12px;\n}\n.--mcp-listener-helper{\n    pointer-events: none;\n}\n\n.--mcp-btn{\n    font-size: 20px;\n}\n\n.--mcp-volume-btn {\n    font-size:15px;\n}\n.--mcp-volumebar{\n    width: 0;\n    padding-left:0px;\n    padding-right:0px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition:all ease .2s;\n}\n.--mcp-volume{\n    height: 100%;\n}\n.--mcp-volume:hover {\n    padding-right:10px;\n}\n.--mcp-volume:hover .--mcp-volumebar,\n.--mcp-volume:active .--mcp-volumebar\n {\n    width: 52px;\n    padding-left:5px;\n}\n.--mcp-volume:hover .--mcp-volume-cursor,\n.--mcp-volume:active .--mcp-volume-cursor\n {\n    display: block;\n}\n\n.--mcp-btn::before {\n    color:var(--defaultColor) !important;\n}\n.--mcp-btn::before:hover {\n    filter: brightness(40);    \n}\n.--mcp-settings-speed-hide{\n    border-bottom:1px solid rgba(255,255,255,0.2);\n}\nul.--mcp-speed-values{\n    padding: 0px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nul.--mcp-speed-values li{\n    width: 100%;\n}\nul.--mcp-speed-values li p{\n    width: 100%;\n}\n.--mcp-settings-panel  ul{\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    padding: 5px 0px;\n    margin: 0px;\n    flex: 1;\n}\n\n.--mcp-settings-panel  ul li {\n    flex:1;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    min-height: 40px;\n    padding: 0px 21px;\n}\n.--mcp-settings-panel  ul li * {\n    cursor: pointer;\n}\n.--mcp-settings-panel  ul li:not(.--mcp-no-hover):hover {\n    background-color: rgba(var(--activeColor),0.2);\n}\n\n.--mcp-settings-panel  ul li > div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;;\n    width:48px;\n    flex: 1;\n    gap: 10px;\n}\n\n.--mcp-settings-panel {\n    width: 251px;\n    position: absolute;\n    background-color: rgba(28,28,28,0.9);\n    right: 15px;\n    bottom: 50px;\n    transition: all ease .2s;\n    z-index: 1000;\n    pointer-events: auto;\n}\n\n.--mcp-speed-values {\n    padding:0px;\n}\n.--mcp-no-hover {\n    padding: 0px !important;\n}\n.--mcp-speed-value-item:not(.--mcp-selected){\n    padding-left:15px;\n}\n.--mcp-speed-value-item.--mcp-selected{\n    padding-left: 10px;\n}\n.--mcp-speed-value .icon-check-solid{\n    margin-left:-5px;\n}\n.--mcp-settings-panel ul.--mcp-speed-settings li > div {\n    justify-content: flex-start;\n    flex:unset;\n    width: 20px;\n}\n\n.--mcp-main-settings ul li > p {\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    flex:1;\n}\n\n\n/* \n\nSliders \n\n*/\n.--mc-player .switch {\n    position: relative;\n    display: inline-block;\n    width: 36px;\n    height: 14px;\n}\n\n.--mc-player .switch input {\n    display: none;\n}\n\n\n.--mc-player .settings-switch::after {\n    clear: both;\n}\n\n.--mc-player .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #999;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.--mc-player .slider:before {\n    position: absolute;\n    content: "";\n    height: 20px;\n    width: 20px;\n    left: 0px;\n    bottom: -3px;\n    background-color: #cfcfcf;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.--mc-player input:checked+.slider {\n    background-color: rgb(var(--activeColor));\n}\n.--mc-player input:checked+.slider:before{\n    background-color: white;\n}\n\n.--mc-player input:focus+.slider {\n    box-shadow: 0 0 1px rgb(var(--activeColor));\n}\n\n.--mc-player input:checked+.slider:before {\n    -webkit-transform: translateX(16px);\n    -ms-transform: translateX(16px);\n    transform: translateX(16px);\n}\n\n.--mc-player .slider.round {\n    border-radius: 34px;\n}\n\n.--mc-player .slider.round:before {\n    border-radius: 50%;\n}\n\n.--mc-player .m-fadeOut {\n    visibility: hidden !important;\n    opacity: 0 !important;\n    display: none !important;\n  }\n  \n  .--mc-player .m-fadeIn {\n    display: unset;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  \n  .--mcp-volume-cursor{\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    background-color: rgb(var(--defaultColor));\n    right: -8px;\n    border-radius: 100%;\n    display: none;\n  }\n  .--mcp-volumebar-color{\n    width: 100%;\n    height: 3px;\n    background-color: rgba(var(--defaultColor),0.3);\n  }\n  .--mcp-volumebar-color-active{\n    width: 100%;\n    height: 100%;\n    background-color: rgb(var(--defaultColor));\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n  }';function G(e){var t=e.clip.props.host.className.includes("full-screen");e.clip.props.host!==e.options.host&&(t?e.options.host.appendChild(e.elements.mcPlayer):e.clip.props.host.appendChild(e.elements.mcPlayer)),t?e.exitFullscreen():e.launchIntoFullscreen(e.clip.props.host)}function q(e){e.settings.loopActivated=!e.settings.loopActivated,e.eventBroadcast(p,e.settings.loopActivated),e.elements.loopButton.classList.toggle("svg-selected"),e.elements.loopBarStart.classList.toggle("m-fadeOut"),e.elements.loopBarEnd.classList.toggle("m-fadeOut"),e.elements.loopBarStart.classList.toggle("m-fadeIn"),e.elements.loopBarStart.classList.toggle("".concat(e.name,"-hide")),e.elements.loopBarEnd.classList.toggle("m-fadeIn"),e.elements.loopBarEnd.classList.toggle("".concat(e.name,"-hide")),e.settings.needsUpdate=!0,e.settings.loopActivated||(e.elements.loopBar.style.left="0%",e.elements.loopBar.style.width="100%",e.settings.loopStartMillisecond=0,e.settings.loopEndMillisecond=e.clip.duration,e.settings.loopLastPositionXPxls=0,e.settings.loopLastPositionXPercentage=0,e.elements.runningBar.style.width=e.clip.runTimeInfo.currentMillisecond/e.clip.duration*100+"%")}var K=function(e){if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var t=Q(e),n=t.loopBarMouseIn,s=t.loopBarMouseOut,o=t.loopBarAddListeners,i=t.loopBarMouseMove;e.elements.loopBar.onmouseover=n,e.elements.loopBar.onmouseout=s,e.elements.loopBar.onmousedown=function(){e.options.preview&&(e.elements.loopBar.onmouseover=e.elements.loopBar.onmouseout=null,e.elements.loopBar.onmousemove=null,T(o,i))},e.elements.loopBar.onmouseup=function(){e.options.preview&&(z(o,i),e.elements.loopBar.onmouseover=n,e.elements.loopBar.onmouseout=s,e.elements.loopBar.onmousemove=i)}}},Q=function(e){var t=function(){e.options.preview&&(e.elements.preview.classList.add("m-fadeIn"),e.elements.preview.classList.remove("m-fadeOut"),e.elements.loopBar.onmousemove=s)},n=function(){e.options.preview&&(e.elements.preview.classList.remove("m-fadeIn"),e.elements.preview.classList.add("m-fadeOut"),e.elements.loopBar.onmousemove=s)},s=function(t){var n=t.clientX,s=e.elements.loopBar.getBoundingClientRect();if(n-s.left+e.settings.loopLastPositionXPxls>e.settings.loopLastPositionXPxls+e.elements.loopBar.offsetWidth&&!e.settings.resizeLoop)e.elements.previewMillisecond.innerHTML=e.timeFormat(e.settings.loopEndMillisecond);else if(n-s.left<0&&!e.settings.resizeLoop)e.elements.previewMillisecond.innerHTML=e.timeFormat(e.settings.loopStartMillisecond);else{var o=n-s.left+e.settings.loopLastPositionXPxls;o<0&&(o=0);var i=e.elements.preview.offsetWidth/2,l=e.elements.preview.offsetWidth/2,r=o-l;o-i<0?r=0:o+i>e.elements.totalBar.offsetWidth&&(r=e.elements.totalBar.offsetWidth-l-i);var a=Math.round(o/e.elements.totalBar.offsetWidth*e.clip.duration);if(e.options.preview){var c=a/e.clip.duration;e.previewClip.onProgress(c,a)}e.elements.previewMillisecond.innerHTML=e.timeFormat(a),e.elements.preview.style.left="".concat(r,"px")}};return{loopBarMouseIn:t,loopBarMouseOut:n,loopBarAddListeners:function o(){e.options.preview&&(n(),e.elements.loopBar.onmouseover=t,e.elements.loopBar.onmouseout=n,e.elements.loopBar.onmousemove=s,z(o,s))},loopBarMouseMove:s}},Y=function(e){e.elements.showIndicatorCheckbox.checked?(e.elements.showIndicatorCheckbox.checked=!1,e.elements.indicator.style.display="none"):(e.elements.showIndicatorCheckbox.checked=!0,e.elements.indicator.style.display=void 0),e.eventBroadcast("show-indicator-change",e.elements.showIndicatorCheckbox.checked)},Z=function(e){e.elements.showPointerEventsCheckbox.checked?(e.elements.showPointerEventsCheckbox.checked=!1,e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="auto",e.elements.controls.style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"):(e.elements.showPointerEventsCheckbox.checked=!0,e.options.pointerEvents=!1,e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="none",e.elements.controls.style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"),e.eventBroadcast("show-pointer-events-change",e.elements.showPointerEventsCheckbox.checked)},$=function(e){e.elements.volumeControl.classList.toggle("m-fadeOut"),e.elements.showVolumeCheckbox.checked?e.elements.showVolumeCheckbox.checked=!1:e.elements.showVolumeCheckbox.checked=!0,e.eventBroadcast(u,e.elements.showVolumeCheckbox.checked)},_=function(e){e.elements.showPreviewCheckbox.checked?(e.elements.showPreviewCheckbox.checked=!1,e.elements.preview.style.display="none",e.elements.preview.style.display="unset",e.options.preview=!1):(e.previewClip||e.createPreviewDisplay(),e.elements.showPreviewCheckbox.checked=!0,e.elements.preview.style.display="flex",e.options.preview=!0),e.eventBroadcast(m,e.elements.showPreviewCheckbox.checked)};function ee(e,t){"showIndicator"===t?Y(e):"showPointerEvents"===t?Z(e):"showVolume"===t?$(e):"showPreview"===t&&_(e)}function te(e,t,n){var o=e.elements;void 0!==s(n)&&(!1===n?(o.volumeBarActive.style.width="".concat(100*e.settings.volume,"%"),e.clip.setVolume(e.settings.previousVolume),e.settings.volumeMute=!1,V(o.volumeBtn,X,J)):!0===n&&(e.settings.volumeMute=!0,o.volumeBarActive.style.width="0%",e.clip.setVolume(0),V(o.volumeBtn,J,X)),e.options.muted=e.settings.volumeMute,e.eventBroadcast(a,e.settings.volumeMute)),void 0!==s(t)&&(e.settings.volume=t,e.settings.volume>0&&(e.settings.previousVolume=t),o.volumeBarActive.style.width="".concat(100*e.settings.volume,"%"),e.clip.setVolume(e.settings.volume),e.settings.volume>0?(e.settings.volumeMute=!1,V(o.volumeBtn,X,J)):0===e.settings.volume&&(e.settings.volumeMute=!0,V(o.volumeBtn,X,J)),e.options.volume=e.settings.volume,e.eventBroadcast(r,e.settings.volume),e.eventBroadcast(a,e.settings.volumeMute))}var ne=new e.TimeCapsule;return function(){function e(t){var n,s,o,i,r,a,c,p,d,u,m,v,g,f,y,b,w,x,B,M=this;for(var k in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null!==(n=t.id)&&void 0!==n||(t.id=Date.now()),null!==(s=t.preview)&&void 0!==s||(t.preview=!1),null!==(o=t.showVolume)&&void 0!==o||(t.showVolume=!1),null!==(i=t.showIndicator)&&void 0!==i||(t.showIndicator=!1),null!==(r=t.theme)&&void 0!==r||(t.theme="transparent position-ontop"),null!==(a=t.host)&&void 0!==a||(t.host=t.clip.props.host),null!==(c=t.buttons)&&void 0!==c||(t.buttons={}),null!==(p=t.timeFormat)&&void 0!==p||(t.timeFormat="ss"),null!==(d=t.backgroundColor)&&void 0!==d||(t.backgroundColor="black"),null!==(u=t.fullscreen)&&void 0!==u||(t.fullscreen=!1),null!==(m=t.scaleToFit)&&void 0!==m||(t.scaleToFit=!0),null!==(v=t.pointerEvents)&&void 0!==v||(t.pointerEvents=!1),null!==(g=t.onMillisecondChange)&&void 0!==g||(t.onMillisecondChange=null),null!==(f=t.speedValues)&&void 0!==f||(t.speedValues=[-2,-1,-.5,0,.5,1,2]),null!==(y=t.muted)&&void 0!==y||(t.muted=!1),null!==(b=t.controls)&&void 0!==b||(t.controls=!0),null!==(w=t.loop)&&void 0!==w||(t.loop=!1),null!==(x=t.volume)&&void 0!==x||(t.volume=1),null!==(B=t.currentScript)&&void 0!==B||(t.currentScript=null),t.speedValues)isFinite(t.speedValues[k])||t.speedValues.splice(k,1);t.speedValues.sort((function(e,t){return e-t})),this.className=l,this.options=t,this.id=this.options.id,this.name=l,this.previewClip=null,this.clip=t.clip,this.clipClass=t.clipClass,this.state=this.clip.runTimeInfo.state,this.listeners={},this.previewScale=.25,this.settings={volume:1,journey:null,previousVolume:1,volumeMute:!1,needsUpdate:!0,resizeLoop:!1,loopJourney:!1,previewJourney:null,loopActivated:!1,requestingLoop:!1,playAfterResize:!1,loopStartMillisecond:0,loopLastPositionXPxls:0,loopLastPositionXPercentage:0,loopEndMillisecond:this.clip.duration,controls:!0},F(this),this.setTheme(),this.setSpeed(),this.subscribeToTimer(),this.subscribeToDurationChange(),this.addEventListeners(),this.scaleClipHost(),this.eventBroadcast(h,this.state),this.options.preview&&this.createPreviewDisplay(),this.resizeTimeout=setTimeout((function(){}),20),window.addEventListener("resize",(function(){clearTimeout(M.resizeTimeout),M.resizeTimeout=setTimeout((function(){M.options.preview&&M.setPreviewDimentions(),M.options.scaleToFit&&M.scaleClipHost()}),20)})),this.changeSettings(t,!0)}var t,s,i;return t=e,(s=[{key:"changeSettings",value:function(e,t){var s,o,i,l,r=this;null!==(s=e.theme)&&void 0!==s||(e.theme="transparent on-top"),null!==(o=e.speed)&&void 0!==o||(e.speed=1),null!==(i=e.volume)&&void 0!==i||(e.volume=1),null!==(l=e.clip)&&void 0!==l||(e.clip=this.clip),e.clip!==this.options.clip&&(t=!0,this.clip=e.clip,this.options.clip=e.clip),!1===e.controls?this.elements.mcPlayer.style.display="none":!0===e.controls&&(this.elements.mcPlayer.style.display=void 0);var a={loop:function(){return q(r)},fullscreen:function(){return G(r)},muted:function(){return te(r,void 0,e.mute)},volume:function(){return te(r,e.volume)},speed:function(){return function(e,t){t=parseFloat(t)||1,e.eventBroadcast(c,t);var n=1==t?"Normal":t;e.clip.executionSpeed=t,e.elements.speedCurrent.innerHTML=n}(r,e.speed)},scaleToFit:function(){r.options.scaleToFit=e.scaleToFit,r.scaleClipHost()},showVolume:function(){return ee(r,"showVolume")},preview:function(){return ee(r,"showPreview")},theme:function(){r.options.theme=e.theme,r.setTheme()}},p=["fullscreen","muted","volume","speed","scaleToFit"];for(var d in a)void 0!==e[d]&&(this.options[d]!==e[d]||t&&this.options[d]&&p.includes(d))&&a[d]();this.options=n(n({},this.options),e)}},{key:"scaleClipHost",value:function(){if(this.options.scaleToFit){var e=this.clip.props.containerParams,t=E({width:e.width,height:e.height},{width:this.clip.props.host.offsetWidth,height:this.clip.props.host.offsetHeight},"cover"===this.options.scaleToFit);this.clip.realClip.rootElement.style.transform="scale(".concat(t.scale),this.clip.realClip.rootElement.style.left="".concat(t.position.left,"px"),this.clip.realClip.rootElement.style.top="".concat(t.position.top,"px")}else this.clip.realClip.rootElement.style.transform="scale(1)",this.clip.realClip.rootElement.style.left="0px",this.clip.realClip.rootElement.style.top="0px";this.eventBroadcast(d,this.options.scaleToFit)}},{key:"createLoop",value:function(e,t){this.settings.loopStartMillisecond=e,this.settings.loopEndMillisecond=t,this.elements.loopBar.style.left="".concat(e/this.clip.duration*100,"%"),this.elements.loopBar.style.width="".concat((t-e)/this.clip.duration*100,"%"),this.createJourney(e),this.elements.runningBar.style.width="0%",!this.settings.loopActivated&&q(this)}},{key:"createJourney",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=this.clip;setTimeout((function(){var o=n.before,i=void 0===o?null:o,l=n.after,r=void 0===l?null:l;i&&s[i](),t.settings.journey=ne.startJourney(s),t.settings.journey.station(e),t.settings.journey.destination(),r&&s[r]()}),0)}},{key:"millisecondChange",value:function(e,t,n,s){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this.state!==t&&(this.state=t,this.eventBroadcast(h,t)),!this.settings.needsUpdate)return this.clip.pause(),1;var i=this.settings.loopActivated;i&&this.clip.speed&&this.calculateJourney(e);var l=this.clip.duration,r=this.elements,a=r.totalBar,c=r.loopBar,p=c.offsetWidth,d=c.offsetLeft/a.offsetWidth,u=e-l*d,m=l/a.offsetWidth*p;s&&this.createJourney(e,{after:this.settings.playAfterResize?"play":null}),this.elements.runningBar.style.width=u/m*100+"%",this.elements.currentTime.innerHTML=this.timeFormat(e),this.options.onMillisecondChange&&o&&this.options.onMillisecondChange(e)}},{key:"calculateJourney",value:function(e){var t=this.settings,n=t.loopEndMillisecond,s=t.loopStartMillisecond,o=e>n||e===this.clip.duration,i=e<s||0===e,l=this.clip.speed>0;if(this.clip.runTimeInfo.state===U)if(l){if(o)return this.createJourney(s+1,{after:"play"}),!0}else if(i)return this.createJourney(n-1,{after:"play"}),!0;return!1}},{key:"broadcastNotPlaying",value:function(e){this.elements.controls.classList.value.includes(N)||this.elements.controls.classList.toggle(N),V(this.elements.statusButton,"pause","play"),this.elements.indicator.innerHTML="".concat(e.charAt(0).toUpperCase()+e.slice(1)),"blocked"==e?(V(this.elements.pointerEventPanel,null,"spinner"),this.elements.pointerEventPanel.classList.add("loading")):(V(this.elements.pointerEventPanel,"spinner",null),this.elements.pointerEventPanel.classList.remove("loading"))}},{key:"broadcastPlaying",value:function(e){this.elements.controls.classList.value.includes(N)&&this.elements.controls.classList.toggle(N),this.elements.indicator.innerHTML="Playing",V(this.elements.statusButton,"play","pause"),e===U&&(this.clip.runTimeInfo.currentMillisecond===this.clip.duration&&this.clip.speed>=0?this.createJourney(1,{after:"play"}):(this.clip.runTimeInfo.currentMillisecond===this.clip.duration||0===this.clip.runTimeInfo.currentMillisecond)&&this.clip.speed<0&&this.createJourney(this.clip.duration-1,{after:"play"}))}},{key:"broadcastDurationChange",value:function(){this.elements.totalTime.innerHTML=this.timeFormat(this.clip.duration),this.settings.loopEndMillisecond=this.clip.duration,this.elements.pointerEventPanel.innerHTML="",this.millisecondChange(this.clip.runTimeInfo.currentMillisecond)}},{key:"broadcastVolumeChange",value:function(e){this.options.volume=e,this.options.currentScript.dataset.volume=e}},{key:"broadcastSpeedChange",value:function(e){this.options.speed=e,this.options.currentScript.dataset.speed=e}},{key:"broadcastMuteChange",value:function(e){e?(this.options.muted=!0,this.options.currentScript.dataset.muted=""):(this.options.muted=!1,delete this.options.currentScript.dataset.muted)}},{key:"broadcastLoopChange",value:function(e){e?(this.options.loop=!0,this.options.currentScript.dataset.loop=""):(this.options.loop=!1,delete this.options.currentScript.dataset.loop)}},{key:"broadcastScaleChange",value:function(e){e?(this.options.scaleToFit=!0,this.options.currentScript.dataset.scaleToFit=""):(this.options.scaleToFit=!1,delete this.options.currentScript.dataset.scaleToFit)}},{key:"broadcastShowVolumeChange",value:function(e){e?(this.options.showVolume=!0,this.options.currentScript.dataset.showVolume=""):(this.options.showVolume=!1,delete this.options.currentScript.dataset.showVolume)}},{key:"broadcastShowPreviewChange",value:function(e){e?(this.options.preview=!0,this.options.currentScript.dataset.preview=""):(this.options.preview=!1,delete this.options.currentScript.dataset.preview)}},{key:"broadcastToScript",value:function(e,t){e===r?this.broadcastVolumeChange(t):e===c?this.broadcastSpeedChange(t):e===a?this.broadcastMuteChange(t):e===p?this.broadcastLoopChange(t):e===d?this.broadcastScaleChange(t):(e===u||e===m)&&this.broadcastShowVolumeChange(t)}},{key:"eventBroadcast",value:function(e,t){e===h?(this.options.currentScript&&(this.options.currentScript.dataset.status=t),["paused","idle","transitional","armed","blocked"].includes(t)?this.broadcastNotPlaying(t):this.broadcastPlaying(t)):e===v?this.broadcastDurationChange():this.options.currentScript&&this.broadcastToScript(e,t)}},{key:"subscribeToDurationChange",value:function(){this.clip.subscribeToDurationChange(this.subscribeToDurationChangeCallback.bind(this))}},{key:"subscribeToDurationChangeCallback",value:function(){this.eventBroadcast(v)}},{key:"subscribeToTimer",value:function(){this.clip.subscribe(this.id,this.millisecondChange.bind(this))}},{key:"handleDragStart",value:function(){this.settings.needsUpdate=!0,this.settings.journey=ne.startJourney(this.clip)}},{key:"timeFormat",value:function(e){if("ss"===this.options.timeFormat){var t=e/1e3/60/60,n=t%1*60,s=n%1*60,o=("0"+parseInt(t)).slice(-2),i=("0"+parseInt(n)).slice(-2),l=("0"+parseInt(s)).slice(-2);return"".concat("00"===o?"":o+":").concat(i,":").concat(l)}return e}},{key:"handleDrag",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];isFinite(e)||(e=0);var n=this.clip.duration,s=this.settings.journey,o=this.elements,i=o.loopBar,l=o.totalBar,r=o.runningBar,a=o.currentTime,c=e+i.offsetLeft,p=Math.round(n*c/l.offsetWidth);a.innerHTML=this.timeFormat(p),r.style.width=e/i.offsetWidth*100+"%",s.station(p),this.options.onMillisecondChange&&t&&this.options.onMillisecondChange(p)}},{key:"handleDragEnd",value:function(){this.settings.journey.destination()}},{key:"createProgressDrag",value:function(e){this.handleDragStart(),this.handleDrag(e),this.handleDragEnd()}},{key:"addEventListeners",value:function(){var e;(e=this).listeners.onCursorMoveLoopEnd=function(t){var n=(t.clientX||((t.touches||[])[0]||{}).clientX)-e.elements.totalBar.getBoundingClientRect().left;n<0?n=0:n>e.elements.totalBar.offsetWidth&&(n=e.elements.totalBar.offsetWidth),e.elements.runningBar.offsetWidth>=e.elements.loopBar.offsetWidth&&(e.elements.runningBar.style.width=e.elements.loopBar.offsetWidth+"px"),e.settings.loopLastPositionXPxls-n<0?e.elements.loopBar.style.width=Math.abs(e.settings.loopLastPositionXPxls-n)+"px":(e.elements.loopBar.style.left=n+"px",e.settings.loopLastPositionXPxls=n),e.settings.loopEndMillisecond=Math.round(e.clip.duration*((parseFloat(e.elements.loopBar.style.left)||0)+parseFloat(e.elements.loopBar.style.width))/e.elements.totalBar.offsetWidth),e.settings.loopEndMillisecond<e.clip.runTimeInfo.currentMillisecond&&(e.settings.loopJourney=!0),e.settings.loopStartMillisecond>e.settings.loopEndMillisecond&&(e.settings.loopStartMillisecond=e.settings.loopEndMillisecond,e.settings.loopJourney=!0)},e.listeners.onMouseUpLoopEnd=function(){e.elements.listenerHelper.style.pointerEvents="none",e.settings.resizeLoop=!1;var t,n=e.elements,s=n.loopBar,o=n.totalBar,i=n.runningBar;i.style.width=i.offsetWidth/s.offsetWidth*100+"%",s.style.left="".concat(s.offsetLeft/o.offsetWidth*100,"%"),s.style.width="".concat(s.offsetWidth/o.offsetWidth*100,"%"),e.settings.loopJourney&&(e.createProgressDrag(i.offsetWidth),e.settings.loopJourney=!1),z(e.listeners.onMouseUpLoopEnd,e.listeners.onCursorMoveLoopEnd),I(e.listeners.onMouseDown,s,!0),e.settings.playAfterResize&&("idle"===e.clip.runTimeInfo.state||"completed"===e.clip.runTimeInfo.state?(t=e.clip.speed>=0?e.settings.loopStartMillisecond+1:e.settings.loopEndMillisecond-1,e.settings.needsUpdate=!0,e.createJourney(t,{before:"pause",after:"play"})):e.clip.play(),e.settings.playAfterResize=!1)},e.listeners.onMouseDownLoopEnd=function(t){e.elements.listenerHelper.style.pointerEvents="auto",e.settings.resizeLoop=!0,e.settings.needsUpdate=!0,"playing"===e.clip.runTimeInfo.state&&(e.clip.pause(),e.settings.playAfterResize=!0),e.elements.runningBar.style.width="".concat(e.elements.runningBar.offsetWidth,"px");var n=e.elements.loopBar;n.style.left="".concat(n.offsetLeft,"px"),n.style.width="".concat(n.offsetWidth,"px"),H(e.listeners.onMouseDown,n),e.listeners.onCursorMoveLoopEnd(t),T(e.listeners.onMouseUpLoopEnd,e.listeners.onCursorMoveLoopEnd)},I(e.listeners.onMouseDownLoopEnd,e.elements.loopBarEnd,!1),function(e){e.listeners.onCursorMove=function(t){var n=(t.clientX||((t.touches||[])[0]||{}).clientX)-e.elements.loopBar.getBoundingClientRect().left;n<0?n=0:n>e.elements.loopBar.offsetWidth&&(n=e.elements.loopBar.offsetWidth),e.handleDrag(n)},e.listeners.onMouseUp=function(){e.elements.listenerHelper.style.pointerEvents="none",z(e.listeners.onMouseUp,e.listeners.onCursorMove),e.handleDragEnd(e.settings)},e.listeners.onMouseDown=function(t){e.elements.listenerHelper.style.pointerEvents="auto","playing"===e.clip.runTimeInfo.state&&(e.settings.playAfterResize=!0),e.handleDragStart(e.clip),e.listeners.onCursorMove(t),T(e.listeners.onMouseUp,e.listeners.onCursorMove)},I(e.listeners.onMouseDown,e.elements.loopBar)}(this),function(e){e.listeners.onCursorMoveLoopStart=function(t){var n=t.clientX||((t.touches||[])[0]||{}).clientX,s=e.elements.totalBar.getBoundingClientRect(),o=Math.round(n-s.left),i=Math.round(e.settings.loopEndMillisecond/e.clip.duration*e.elements.totalBar.offsetWidth);o<0?o=0:o>e.elements.totalBar.offsetWidth&&(o=e.elements.totalBar.offsetWidth);var l=e.clip.runTimeInfo.currentMillisecond/e.clip.duration*e.elements.totalBar.offsetWidth-o;e.elements.loopBar.style.left=o+"px",e.elements.loopBar.style.width=i-o+"px",e.elements.runningBar.style.width=l+"px",e.settings.loopLastPositionXPxls=o,e.settings.loopStartMillisecond=Math.round(e.clip.duration*e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth),e.settings.loopEndMillisecond<e.settings.loopStartMillisecond&&(e.settings.loopEndMillisecond=e.settings.loopStartMillisecond,e.elements.loopBar.style.width="0px",e.elements.runningBar.style.width="0px"),e.settings.loopStartMillisecond>e.clip.runTimeInfo.currentMillisecond&&(e.settings.loopJourney=!0)},e.listeners.onMouseUpLoopStart=function(){var t;e.elements.listenerHelper.style.pointerEvents="none",e.settings.resizeLoop=!1,e.settings.loopJourney&&(e.createProgressDrag(e.elements.runningBar.offsetWidth),e.settings.loopJourney=!1),e.elements.loopBar.style.left=e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth*100+"%",e.elements.loopBar.style.width=e.elements.loopBar.offsetWidth/e.elements.totalBar.offsetWidth*100+"%",e.settings.loopStartMillisecond=Math.round(e.clip.duration*e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth),e.elements.runningBar.style.width=e.elements.runningBar.offsetWidth/e.elements.loopBar.offsetWidth*100+"%",z(e.listeners.onMouseUpLoopStart,e.listeners.onCursorMoveLoopStart),I(e.listeners.onMouseDown,e.elements.loopBar,!0),e.settings.playAfterResize&&("idle"===e.clip.runTimeInfo.state?(t=e.clip.speed>=0?e.settings.loopStartMillisecond+1:e.settings.loopEndMillisecond-1,e.settings.needsUpdate=!0,e.createJourney(t,{before:"pause",after:"play"})):e.clip.play(),e.settings.playAfterResize=!1)},e.listeners.onMouseDownLoopStart=function(t){e.elements.listenerHelper.style.pointerEvents="auto",e.settings.resizeLoop=!0,e.settings.needsUpdate=!0,"playing"===e.clip.runTimeInfo.state&&(e.clip.pause(),e.settings.playAfterResize=!0),H(e.listeners.onMouseDown,e.elements.loopBar),e.listeners.onCursorMoveLoopStart(t),T(e.listeners.onMouseUpLoopStart,e.listeners.onCursorMoveLoopStart)},I(e.listeners.onMouseDownLoopStart,e.elements.loopBarStart)}(this),function(e){var t=e.elements,n=!1;t.volumeBtn.onclick=function(){e.settings.volumeMute?(t.volumeBarActive.style.width="".concat(100*e.settings.volume,"%"),e.clip.setVolume(e.settings.previousVolume),t.volumeBarActive.style.width="".concat(100*e.settings.previousVolume,"%"),e.settings.volumeMute=!1,V(t.volumeBtn,X,J)):(e.settings.volumeMute=!0,V(t.volumeBtn,J,X),t.volumeBarActive.style.width="0%",e.clip.setVolume(0)),e.eventBroadcast(r,e.settings.previousVolume),e.eventBroadcast(a,e.settings.volumeMute)};var s=!1;t.volumeBtn.onmouseover=function(){s=!0},e.elements.leftButtons.onmouseout=function(){if(s&&!n){var t=event.toElement||event.relatedTarget||event.target;t===e.elements.leftButtons||function(e,t){for(var n=t.parentNode;null!=n;){if(n==e)return!0;n=n.parentNode}return!1}(e.elements.leftButtons,t)||(s=!1)}};var o=e.listeners;o.onCursorMoveVolumeBar=function(n){var s=(n.clientX||((n.touches||[])[0]||{}).clientX)-t.volumeBarHelper.getBoundingClientRect().left;if(s<0?s=0:s>t.volumeBarHelper.offsetWidth&&(s=t.volumeBarHelper.offsetWidth),e.settings.volume=Number((s/t.volumeBarHelper.offsetWidth).toFixed(2)),t.volumeBarActive.style.width="".concat(100*e.settings.volume,"%"),e.clip.setVolume(e.settings.volume),e.settings.volume>=0){var o=0===e.settings.volume;e.settings.volumeMute=o,o?V(t.volumeBtn,J,X):V(t.volumeBtn,X,J)}e.eventBroadcast(r,e.settings.volume),e.eventBroadcast(a,e.settings.volumeMute)},o.onMouseUpVolumeBar=function(){n=!1,t.listenerHelper.style.pointerEvents="none",e.settings.volume>0&&(e.settings.previousVolume=e.settings.volume),z(o.onMouseUpVolumeBar,o.onCursorMoveVolumeBar)},o.onMouseDownVolumeBar=function(e){n=!0,t.listenerHelper.style.pointerEvents="auto",o.onCursorMoveVolumeBar(e),T(o.onMouseUpVolumeBar,o.onCursorMoveVolumeBar)},I(o.onMouseDownVolumeBar,t.volumeBarHelper),I(o.onMouseDownVolumeBar,t.volumeCursor)}(this),function(e){e.elements.statusButton.onclick=function(){switch(e.clip.runTimeInfo.state){case"playing":e.clip.pause();break;case"paused":case"idle":case"transitional":case"armed":e.clip.play()}return!1}}(this),function(e){e.elements.settingsShowIndicator.onclick=function(){return Y(e)},e.elements.settingsPointerEvents.onclick=function(){return Z(e)},e.elements.settingsShowVolume.onclick=function(){return $(e)},e.elements.settingsShowPreview.onclick=function(){return _(e)},e.elements.settingsButton.onclick=function(){var t=function t(n){if(e.elements.settingsPanel.contains(n.target))return!0;e.elements.settingsPanel.classList.toggle("".concat(e.name,"-hide")),e.elements.settingsPanel.classList.toggle("m-fadeOut"),e.elements.settingsPanel.classList.toggle("m-fadeIn"),e.elements.settingsPanel.className.includes("m-fadeOut")&&(L("click",t,!1),e.eventBroadcast(h,e.state))};e.elements.settingsPanel.className.includes("m-fadeOut")?(e.elements.controls.classList.value.includes("--mcp-force-show-controls")||e.elements.controls.classList.toggle("--mcp-force-show-controls"),C("click",t,!1)):L("click",t,!1)}}(this),function(e){e.elements.settingsSpeedButtonShow.onclick=e.elements.settingsSpeedButtonHide.onclick=function(){e.elements.settingsPanel.classList.toggle("".concat(e.name,"-settings-speed-panel")),e.elements.settingsPanel.className.includes("".concat(e.name,"-settings-speed-panel"))?(e.elements.settingsMainPanel.style.display="none",e.elements.settingsSpeedPanel.style.display="block"):(e.elements.settingsSpeedPanel.style.display="none",e.elements.settingsMainPanel.style.display="block")}}(this),function(e){e.elements.loopButton.onclick=function(){return q(e)}}(this),function(e){e.elements.fullScreenButton.onclick=function(){return G(e)}}(this),A(this),K(this),function(e){function t(){e.elements.mcPlayer.classList.toggle("full-screen"),e.clip.props.host.classList.toggle("full-screen"),e.options.preview&&e.setPreviewDimentions()}C("fullscreenchange",t),C("webkitfullscreenchange",t),C("mozfullscreenchange",t),C("MSFullscreenChange",t)}(this)}},{key:"launchIntoFullscreen",value:function(e){this.options.preview&&this.setPreviewDimentions(),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"exitFullscreen",value:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},{key:"setTheme",value:function(){this.options.theme.replace(/\s\s+/g," "),this.options.theme.trim();var e,t,n="position-ontop",s="position-bottom";if(this.options.theme.includes(n)||this.options.theme.includes(s)||(this.options.theme+=" ".concat(n)),this.options.theme.includes(n)?this.elements.mcPlayer.classList.add(n):this.elements.mcPlayer.classList.add(s),this.options.theme.includes("default")?this.elements.mcPlayer.classList.add("theme-default"):this.options.theme.includes("transparent")?this.elements.mcPlayer.classList.add("theme-transparent"):this.options.theme.includes("whiteGold")?this.elements.mcPlayer.classList.add("theme-whiteGold"):this.options.theme.includes("darkGold")?this.elements.mcPlayer.classList.add("theme-darkGold"):this.options.theme.includes("green")?this.elements.mcPlayer.classList.add("theme-green"):this.options.theme.includes("blue")?this.elements.mcPlayer.classList.add("theme-blue"):this.options.theme.includes("dark")&&this.elements.mcPlayer.classList.add("theme-dark"),t="--mc-player-style",!document.getElementById(t)){var o=k("style");o.id="--mc-player-style",o.styleSheet?o.styleSheet.cssText=R:o.appendChild(document.createTextNode(R)),(e="head",document.getElementsByTagName(e))[0].appendChild(o)}this.eventBroadcast("theme-change",this.options.theme)}},{key:"setSpeed",value:function(){var e=1==this.clip.speed?"Normal":this.clip.speed;this.elements.speedCurrent.innerHTML=e}},{key:"calculateSpeed",value:function(e,t,n){var s=Math.floor(n/e);if(s===t.length-1)return t[s].toFixed(1);var o=(n/e%1*Math.abs(t[s]-t[s+1])+t[s]).toFixed(1);return 0==o?"0.0":o}},{key:"createPreviewDisplay",value:function(){this.previewClip=this.clip.paste(this.elements.previewHost,{isPreviewClip:!0}),this.elements.previewHost.style.position="absolute",this.elements.previewHost.style.background=this.options.backgroundColor,this.elements.previewHost.style.zIndex=1,this.setPreviewDimentions()}},{key:"setPreviewDimentions",value:function(){var e=this.clip.props.host,t=this.previewClip.ownClip.props.host,n=e.offsetWidth,s=e.offsetHeight,o=n*this.previewScale;o>300&&(o=300,this.previewScale=o/n);var i=n*this.previewScale,l=s*this.previewScale,r=E({width:this.clip.props.containerParams.width,height:this.clip.props.containerParams.height},{width:i,height:l},"cover"===this.options.scaleToFit);this.previewClip.ownClip.rootElement.style.transform="scale(".concat(r.scale),this.previewClip.ownClip.rootElement.style.left="".concat(r.position.left,"px"),this.previewClip.ownClip.rootElement.style.top="".concat(r.position.top,"px"),this.elements.preview.style.width="".concat(i,"px"),this.elements.preview.style.height="".concat(l,"px"),t.style.boxSizing="border-box"}}])&&o(t.prototype,s),i&&o(t,i),e}()}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, n) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = n(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t) {
  "use strict";

  function n(t) {
    return t && "object" == _typeof(t) && "default" in t ? t : {
      default: t
    };
  }

  var e = n(t);

  function o(t, n) {
    var e = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      n && (o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      })), e.push.apply(e, o);
    }

    return e;
  }

  function r(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2 ? o(Object(e), !0).forEach(function (n) {
        p(t, n, e[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
      });
    }

    return t;
  }

  function i(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  function a(t, n) {
    for (var e = 0; e < n.length; e++) {
      var o = n[e];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function s(t, n, e) {
    return n && a(t.prototype, n), e && a(t, e), t;
  }

  function p(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = e, t;
  }

  function u(t, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), n && c(t, n);
  }

  function l(t) {
    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function c(t, n) {
    return (c = Object.setPrototypeOf || function (t, n) {
      return t.__proto__ = n, t;
    })(t, n);
  }

  function f(t, n) {
    return !n || "object" != _typeof(n) && "function" != typeof n ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t) : n;
  }

  function y(t) {
    var n = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var e,
          o = l(t);

      if (n) {
        var r = l(this).constructor;
        e = Reflect.construct(o, arguments, r);
      } else e = o.apply(this, arguments);

      return f(this, e);
    };
  }

  var d = {},
      g = {
    duration: 1e3,
    round: 0
  },
      h = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
      m = {
    CSS: {}
  };

  function b(t, n, e) {
    return Math.min(Math.max(t, n), e);
  }

  function v(t, n) {
    return t.indexOf(n) > -1;
  }

  var x = {
    arr: function arr(t) {
      return Array.isArray(t);
    },
    obj: function obj(t) {
      return v(Object.prototype.toString.call(t), "Object");
    },
    pth: function pth(t) {
      return x.obj(t) && t.hasOwnProperty("totalLength");
    },
    svg: function svg(t) {
      return t instanceof SVGElement;
    },
    inp: function inp(t) {
      return t instanceof HTMLInputElement;
    },
    dom: function dom(t) {
      return t.nodeType || x.svg(t);
    },
    str: function str(t) {
      return "string" == typeof t;
    },
    fnc: function fnc(t) {
      return "function" == typeof t;
    },
    und: function und(t) {
      return void 0 === t;
    },
    hex: function hex(t) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
    },
    rgb: function rgb(t) {
      return /^rgb/.test(t);
    },
    hsl: function hsl(t) {
      return /^hsl/.test(t);
    },
    col: function col(t) {
      return x.hex(t) || x.rgb(t) || x.hsl(t);
    },
    key: function key(t) {
      return !d.hasOwnProperty(t) && !g.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t;
    }
  },
      w = {
    linear: function linear() {
      return function (t) {
        return t;
      };
    }
  };

  function P(t, n) {
    for (var e = t.length, o = arguments.length >= 2 ? arguments[1] : void 0, r = [], i = 0; i < e; i++) {
      if (i in t) {
        var a = t[i];
        n.call(o, a, i, t) && r.push(a);
      }
    }

    return r;
  }

  function O(t) {
    return t.reduce(function (t, n) {
      return t.concat(x.arr(n) ? O(n) : n);
    }, []);
  }

  function k(t) {
    return x.arr(t) ? t : (x.str(t) && (t = function (t) {
      try {
        return document.querySelectorAll(t);
      } catch (t) {
        return;
      }
    }(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t]);
  }

  function S(t, n) {
    return t.some(function (t) {
      return t === n;
    });
  }

  function M(t) {
    var n = {};

    for (var e in t) {
      n[e] = t[e];
    }

    return n;
  }

  function j(t, n) {
    var e = M(t);

    for (var o in t) {
      e[o] = n.hasOwnProperty(o) ? n[o] : t[o];
    }

    return e;
  }

  function C(t, n) {
    var e = M(t);

    for (var o in n) {
      e[o] = x.und(t[o]) ? n[o] : t[o];
    }

    return e;
  }

  function R(t) {
    return x.rgb(t) ? (e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n = t)) ? "rgba(" + e[1] + ",1)" : n : x.hex(t) ? function (t) {
      var n = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, n, e, o) {
        return n + n + e + e + o + o;
      }),
          e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
      return "rgba(" + parseInt(e[1], 16) + "," + parseInt(e[2], 16) + "," + parseInt(e[3], 16) + ",1)";
    }(t) : x.hsl(t) ? function (t) {
      var n,
          e,
          o,
          r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
          i = parseInt(r[1], 10) / 360,
          a = parseInt(r[2], 10) / 100,
          s = parseInt(r[3], 10) / 100,
          p = r[4] || 1;

      function u(t, n, e) {
        return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + 6 * (n - t) * e : e < .5 ? n : e < 2 / 3 ? t + (n - t) * (2 / 3 - e) * 6 : t;
      }

      if (0 == a) n = e = o = s;else {
        var l = s < .5 ? s * (1 + a) : s + a - s * a,
            c = 2 * s - l;
        n = u(c, l, i + 1 / 3), e = u(c, l, i), o = u(c, l, i - 1 / 3);
      }
      return "rgba(" + 255 * n + "," + 255 * e + "," + 255 * o + "," + p + ")";
    }(t) : void 0;
    var n, e;
  }

  function I(t) {
    var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
    if (n) return n[1];
  }

  function T(t, n) {
    return x.fnc(t) ? t(n.target, n.id, n.total) : t;
  }

  function E(t, n) {
    return t.getAttribute(n);
  }

  function B(t, n, e) {
    if (S([e, "deg", "rad", "turn"], I(n))) return n;
    var o = m.CSS[n + e];
    if (!x.und(o)) return o;
    var r = document.createElement(t.tagName),
        i = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
    i.appendChild(r), r.style.position = "absolute", r.style.width = 100 + e;
    var a = 100 / r.offsetWidth;
    i.removeChild(r);
    var s = a * parseFloat(n);
    return m.CSS[n + e] = s, s;
  }

  function L(t, n, e) {
    if (n in t.style) {
      var o = n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          r = t.style[n] || getComputedStyle(t).getPropertyValue(o) || "0";
      return e ? B(t, r, e) : r;
    }
  }

  function A(t, n) {
    return x.dom(t) && !x.inp(t) && (E(t, n) || x.svg(t) && t[n]) ? "attribute" : x.dom(t) && S(h, n) ? "transform" : x.dom(t) && "transform" !== n && L(t, n) ? "css" : null != t[n] ? "object" : void 0;
  }

  function X(t) {
    if (x.dom(t)) {
      for (var n, e = t.style.transform || "", o = /(\w+)\(([^)]*)\)/g, r = new Map(); n = o.exec(e);) {
        r.set(n[1], n[2]);
      }

      return r;
    }
  }

  function Y(t, n, e, o) {
    var r = v(n, "scale") ? 1 : 0 + function (t) {
      return v(t, "translate") || "perspective" === t ? "px" : v(t, "rotate") || v(t, "skew") ? "deg" : void 0;
    }(n),
        i = X(t).get(n) || r;
    return e && (e.transforms.list.set(n, i), e.transforms.last = n), o ? B(t, i, o) : i;
  }

  function V(t, n, e, o) {
    switch (A(t, n)) {
      case "transform":
        return Y(t, n, o, e);

      case "css":
        return L(t, n, e);

      case "attribute":
        return E(t, n);

      default:
        return t[n] || 0;
    }
  }

  function W(t, n) {
    var e = /^(\*=|\+=|-=)/.exec(t);
    if (!e) return t;
    var o = I(t) || 0,
        r = parseFloat(n),
        i = parseFloat(t.replace(e[0], ""));

    switch (e[0][0]) {
      case "+":
        return r + i + o;

      case "-":
        return r - i + o;

      case "*":
        return r * i + o;
    }
  }

  function G(t, n) {
    if (x.col(t)) return R(t);
    if (/\s/g.test(t)) return t;
    var e = I(t),
        o = e ? t.substr(0, t.length - e.length) : t;
    return n ? o + n : o;
  }

  function N(t, n) {
    var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        o = G(x.pth(t) ? t.totalLength : t, n) + "";
    return {
      original: o,
      numbers: o.match(e) ? o.match(e).map(Number) : [0],
      strings: x.str(t) || n ? o.split(e) : []
    };
  }

  function z(t) {
    var n = function (t) {
      return P(t ? O(x.arr(t) ? t.map(k) : k(t)) : [], function (t, n, e) {
        return e.indexOf(t) === n;
      });
    }(t);

    return n.map(function (t, e) {
      return {
        target: t,
        id: e,
        total: n.length,
        transforms: {
          list: X(t)
        }
      };
    });
  }

  function Z(t, n) {
    var e = M(n);

    if (x.arr(t)) {
      var o = t.length;
      2 === o && !x.obj(t[0]) ? t = {
        value: t
      } : x.fnc(n.duration) || (e.duration = n.duration / o);
    }

    return (x.arr(t) ? t : [t]).map(function (t, n) {
      return x.obj(t) && !x.pth(t) ? t : {
        value: t
      };
    }).map(function (t) {
      return C(t, e);
    });
  }

  function D(t, n) {
    var e;
    return t.tweens.map(function (o) {
      var r = function (t, n) {
        var e = {};

        for (var o in t) {
          var r = T(t[o], n);
          x.arr(r) && 1 === (r = r.map(function (t) {
            return T(t, n);
          })).length && (r = r[0]), e[o] = r;
        }

        return e.duration = parseFloat(e.duration), e;
      }(o, n),
          i = r.value,
          a = x.arr(i) ? i[1] : i,
          s = I(a),
          p = V(n.target, t.name, s, n),
          u = e ? e.to.original : p,
          l = x.arr(i) ? i[0] : u,
          c = I(l) || I(p),
          f = s || c;

      return x.und(a) && (a = u), r.from = N(l, f), r.to = N(W(a, l), f), r.start = e ? e.end : 0, r.end = r.start + r.duration, r.isPath = !1, r.isColor = x.col(r.from.original), r.isColor && (r.round = 1), e = r, r;
    });
  }

  var _ = {
    css: function css(t, n, e) {
      return t.style[n] = e;
    },
    attribute: function attribute(t, n, e) {
      return t.setAttribute(n, e);
    },
    object: function object(t, n, e) {
      return t[n] = e;
    },
    transform: function transform(t, n, e, o, r) {
      if (o.list.set(n, e), n === o.last || r) {
        var i = "";
        o.list.forEach(function (t, n) {
          i += n + "(" + t + ") ";
        }), t.style.transform = i;
      }
    }
  };

  function F(t, n) {
    z(t).forEach(function (t) {
      for (var e in n) {
        var o = T(n[e], t),
            r = t.target,
            i = I(o),
            a = V(r, e, i, t),
            s = W(G(o, i || I(a)), a),
            p = A(r, e);

        _[p](r, e, s, t.transforms, !0);
      }
    });
  }

  function $(t, n) {
    return P(O(t.map(function (t) {
      return n.map(function (n) {
        return function (t, n) {
          var e = A(t.target, n.name);

          if (e) {
            var o = D(n, t),
                r = o[o.length - 1];
            return {
              type: e,
              property: n.name,
              animatable: t,
              tweens: o,
              duration: r.end
            };
          }
        }(t, n);
      });
    })), function (t) {
      return !x.und(t);
    });
  }

  var K = 0;

  function H(t) {
    var n = j(d, t),
        e = j(g, t),
        o = function (t, n) {
      var e = [];

      for (var o in n) {
        x.key(o) && e.push({
          name: o,
          tweens: Z(n[o], t)
        });
      }

      return e;
    }(e, t),
        r = z(t.targets),
        i = $(r, o),
        a = function (t, n) {
      var e = t.length,
          o = {};
      return o.duration = e ? Math.max.apply(Math, t.map(function (t) {
        return t.duration;
      })) : n.duration, o;
    }(i, e),
        s = K;

    return K++, C(n, {
      id: s,
      children: [],
      animatables: r,
      animations: i,
      duration: a.duration
    });
  }

  function q(t) {
    void 0 === t && (t = {});
    var n,
        e = 0,
        o = null;

    function r(t) {
      var n = window.Promise && new Promise(function (t) {
        return o = t;
      });
      return t.finished = n, n;
    }

    var i = H(t);

    function a(t, n) {
      n && n.seek(t);
    }

    function s(t) {
      var s = i.duration,
          p = t;
      i.progress = b(p / s * 100, 0, 100), i.reversePlayback = p < i.currentTime, n && function (t) {
        if (i.reversePlayback) for (var o = e; o--;) {
          a(t, n[o]);
        } else for (var r = 0; r < e; r++) {
          a(t, n[r]);
        }
      }(p), !i.began && i.currentTime > 0 && (i.began = !0), function (t) {
        for (var n = 0, e = i.animations, o = e.length; n < o;) {
          var r = e[n],
              a = r.animatable,
              s = r.tweens,
              p = s.length - 1,
              u = s[p];
          p && (u = P(s, function (n) {
            return t < n.end;
          })[0] || u);

          for (var l = b(t - u.start, 0, u.duration) / u.duration, c = u.to.strings, f = u.round, y = [], d = u.to.numbers.length, g = void 0, h = 0; h < d; h++) {
            var m = void 0,
                v = u.to.numbers[h],
                x = u.from.numbers[h] || 0;
            m = x + l * (v - x), f && (u.isColor && h > 2 || (m = Math.round(m * f) / f)), y.push(m);
          }

          var w = c.length;

          if (w) {
            g = c[0];

            for (var O = 0; O < w; O++) {
              c[O];
              var k = c[O + 1],
                  S = y[O];
              isNaN(S) || (g += k ? S + k : S + " ");
            }
          } else g = y[0];

          _[r.type](a.target, r.property, g, a.transforms), r.currentValue = g, n++;
        }
      }(p), i.currentTime = b(p, 0, s), t >= s && (i.paused = !0, i.completed || (i.completed = !0, !i.passThrough && "Promise" in window && (o(), r(i))));
    }

    return r(i), i.reset = function () {
      i.passThrough = !1, i.currentTime = 0, i.progress = 0, i.paused = !0, i.began = !1, i.completed = !1, i.reversePlayback = !1, n = i.children;

      for (var t = e = n.length; t--;) {
        i.children[t].reset();
      }
    }, i.set = function (t, n) {
      return F(t, n), i;
    }, i.seek = function (t) {
      s(t);
    }, i.reset(), i;
  }

  function U(t, n) {
    return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
  }

  function J(t) {
    for (var n, e = t.points, o = 0, r = 0; r < e.numberOfItems; r++) {
      var i = e.getItem(r);
      r > 0 && (o += U(n, i)), n = i;
    }

    return o;
  }

  function Q(t) {
    if (t.getTotalLength) return t.getTotalLength();

    switch (t.tagName.toLowerCase()) {
      case "circle":
        return function (t) {
          return 2 * Math.PI * E(t, "r");
        }(t);

      case "rect":
        return function (t) {
          return 2 * E(t, "width") + 2 * E(t, "height");
        }(t);

      case "line":
        return function (t) {
          return U({
            x: E(t, "x1"),
            y: E(t, "y1")
          }, {
            x: E(t, "x2"),
            y: E(t, "y2")
          });
        }(t);

      case "polyline":
        return J(t);

      case "polygon":
        return function (t) {
          var n = t.points;
          return J(t) + U(n.getItem(n.numberOfItems - 1), n.getItem(0));
        }(t);
    }
  }

  function tt(t, n) {
    var e = n || {},
        o = e.el || function (t) {
      for (var n = t.parentNode; x.svg(n) && x.svg(n.parentNode);) {
        n = n.parentNode;
      }

      return n;
    }(t),
        r = o.getBoundingClientRect(),
        i = E(o, "viewBox"),
        a = r.width,
        s = r.height,
        p = e.viewBox || (i ? i.split(" ") : [0, 0, a, s]);

    return {
      el: o,
      viewBox: p,
      x: p[0] / 1,
      y: p[1] / 1,
      w: a,
      h: s,
      vW: p[2],
      vH: p[3]
    };
  }

  q.version = "3.1.0", q.get = V, q.set = F, q.convertPx = B, q.penner = w, q.path = function (t) {
    return {
      el: t,
      svg: tt(t),
      totalLength: Q(t),
      deltaCorrections: {
        x: 4,
        y: 5
      }
    };
  }, q.getPathProgress = function (t, n, e) {
    function o(e) {
      void 0 === e && (e = 0);
      var o = n * t.totalLength,
          r = o + e >= 1 ? o + e : 0;
      return t.el.getPointAtLength(r);
    }

    var r = tt(t.el, t.svg),
        i = o(),
        a = o(-1),
        s = o(1);
    return {
      x: 1 * (i.x - r.x),
      y: 1 * (i.y - r.y),
      angle: 180 * Math.atan2(s.y - a.y, s.x - a.x) / Math.PI
    };
  };
  var nt = q,
      et = {
    transform: ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"]
  };
  var ot = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"],
      rt = ["deg", "rad", "grad", "turn"],
      it = "measurement",
      at = "color";
  return {
    npm_name: "@kissmybutton/motorcortex-anime",
    version: "2.1.16",
    incidents: [{
      exportable: function (t) {
        u(e, t);
        var n = y(e);

        function e() {
          return i(this, e), n.apply(this, arguments);
        }

        return s(e, [{
          key: "onGetContext",
          value: function value() {
            var t = {};
            if (Object.prototype.hasOwnProperty.call(et, this.attributeKey)) for (var n = et[this.attributeKey], e = 0; e < n.length; e++) {
              Object.prototype.hasOwnProperty.call(this.targetValue, n[e]) && (t[n[e]] = [this.initialValue[n[e]], this.targetValue[n[e]]]);
            } else t[this.attributeKey] = [this.initialValue, this.targetValue];
            this.target = nt(r(r({
              autoplay: !1,
              duration: this.props.duration,
              easing: "linear",
              targets: this.element
            }, (this.attrs || {}).attrs || {}), t));
          }
        }, {
          key: "getScratchValue",
          value: function value() {
            if ("transform" !== this.attributeKey) return nt.get(this.element, this.attributeKey);

            for (var t = {}, n = et[this.attributeKey], e = function (t, n) {
              var e = t.getComputedStyle(n).transform;
              if ("" === e || "none" === e) return {};
              var o,
                  r,
                  i,
                  a,
                  s,
                  p,
                  u,
                  l,
                  c = e.split("(")[1].split(")")[0].split(",");
              return o = c, r = Math.atan2(o[1], o[0]), i = Math.pow(o[0], 2) + Math.pow(o[1], 2), a = Math.pow(o[2], 2) + Math.pow(o[3], 2), s = Math.sqrt(i), p = (o[0] * o[3] - o[2] * o[1]) / s, u = Math.atan2(o[0] * o[2] + o[1] * o[3], i), l = Math.atan2(o[1] * o[3] + o[0] * o[2], a), {
                rotate: r / (Math.PI / 180) + "deg",
                scaleX: s,
                scaleY: p,
                skewX: (1 === i ? u / (Math.PI / 180) : 0) + "deg",
                skewY: (1 === a ? l / (Math.PI / 180) : 0) + "deg",
                translateX: o[4] + "px",
                translateY: o[5] + "px"
              };
            }(this.context.window, this.element), o = 0; o < n.length; o++) {
              t[n[o]] = Object.prototype.hasOwnProperty.call(e, n[o]) ? e[n[o]] : nt.get(this.element, n[o]);
            }

            return t;
          }
        }, {
          key: "onProgress",
          value: function value(t) {
            return this.target.seek(this.target.duration * t);
          }
        }]), e;
      }(e.default.Effect),
      name: "Anime",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            background: {
              optional: !0,
              type: at
            },
            backgroundColor: {
              optional: !0,
              type: at
            },
            backgroundPosition: {
              optional: !0,
              type: "string"
            },
            backgroundSize: {
              optional: !0,
              type: "string"
            },
            border: {
              optional: !0,
              type: "string"
            },
            borderBottom: {
              optional: !0,
              type: "string"
            },
            borderBottomColor: {
              optional: !0,
              type: at
            },
            borderBottomLeftRadius: {
              optional: !0,
              type: it,
              units: ot
            },
            borderBottomRightRadius: {
              optional: !0,
              type: it,
              units: ot
            },
            borderBottomWidth: {
              optional: !0,
              type: it,
              units: ot
            },
            borderColor: {
              optional: !0,
              type: at
            },
            borderEndEndRadius: {
              optional: !0,
              type: it,
              units: ot
            },
            borderEndStartRadius: {
              optional: !0,
              type: it,
              units: ot
            },
            borderImageOutset: {
              optional: !0,
              type: it,
              units: ot,
              min: 0
            },
            borderImageSlice: {
              optional: !0,
              type: it,
              units: ot,
              min: 0
            },
            borderImageWidth: {
              optional: !0,
              type: it,
              units: ot,
              min: 0
            },
            borderLeft: {
              optional: !0,
              type: "string"
            },
            borderLeftColor: {
              optional: !0,
              type: at
            },
            borderLeftWidth: {
              optional: !0,
              type: it,
              units: ot
            },
            borderRadius: {
              optional: !0,
              type: it,
              units: ot
            },
            borderRight: {
              optional: !0,
              type: "string"
            },
            borderRightColor: {
              optional: !0,
              type: at
            },
            borderRightWidth: {
              optional: !0,
              type: it,
              units: ot
            },
            borderStartEndRadius: {
              optional: !0,
              type: it,
              units: ot
            },
            borderStartStartRadius: {
              optional: !0,
              type: it,
              units: ot
            },
            borderTop: {
              optional: !0,
              type: "string"
            },
            borderTopColor: {
              optional: !0,
              type: at
            },
            borderTopLeftRadius: {
              optional: !0,
              type: it,
              units: ot
            },
            borderTopRightRadius: {
              optional: !0,
              type: it,
              units: ot
            },
            borderTopWidth: {
              optional: !0,
              type: it,
              units: ot
            },
            borderWidth: {
              optional: !0,
              type: it,
              units: ot
            },
            bottom: {
              optional: !0,
              type: it,
              units: ot
            },
            boxShadow: {
              optional: !0,
              type: "string"
            },
            caretColor: {
              optional: !0,
              type: at
            },
            color: {
              optional: !0,
              type: at
            },
            columnCount: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            columnGap: {
              optional: !0,
              type: it,
              units: ot
            },
            columnRule: {
              optional: !0,
              type: "string"
            },
            columnRuleColor: {
              optional: !0,
              type: at
            },
            columnRuleWidth: {
              optional: !0,
              type: it,
              units: ot
            },
            columns: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            columnWidth: {
              optional: !0,
              type: it,
              units: ot
            },
            flex: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            flexBasis: {
              optional: !0,
              type: it,
              units: ot
            },
            flexGrow: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            flexShrink: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            font: {
              optional: !0,
              type: "string"
            },
            fontSize: {
              optional: !0,
              type: it,
              units: ot
            },
            fontSizeAdjust: {
              optional: !0,
              type: it,
              units: ot,
              min: 0
            },
            fontStretch: {
              optional: !0,
              type: it,
              units: ["%"]
            },
            fontWeight: {
              optional: !0,
              type: "string"
            },
            gap: {
              optional: !0,
              type: it,
              units: ot
            },
            gridColumnGap: {
              optional: !0,
              type: it,
              units: ot
            },
            gridGap: {
              optional: !0,
              type: it,
              units: ot
            },
            gridRowGap: {
              optional: !0,
              type: it,
              units: ot
            },
            gridTemplateColumns: {
              optional: !0,
              type: it,
              units: ot
            },
            gridTemplateRows: {
              optional: !0,
              type: it,
              units: ot
            },
            height: {
              optional: !0,
              type: it,
              units: ot,
              min: 0
            },
            inset: {
              optional: !0,
              type: it,
              units: ot,
              min: 0
            },
            insetBlock: {
              optional: !0,
              type: it,
              units: ot
            },
            insetBlockEnd: {
              optional: !0,
              type: it,
              units: ot
            },
            insetBlockStart: {
              optional: !0,
              type: it,
              units: ot
            },
            insetInline: {
              optional: !0,
              type: it,
              units: ot
            },
            insetInlineEnd: {
              optional: !0,
              type: it,
              units: ot
            },
            insetInlineStart: {
              optional: !0,
              type: it,
              units: ot
            },
            left: {
              optional: !0,
              type: it,
              units: ot
            },
            letterSpacing: {
              optional: !0,
              type: it,
              units: ot
            },
            lineClamp: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            lineHeight: {
              optional: !0,
              type: it,
              units: ot,
              min: 0
            },
            margin: {
              optional: !0,
              type: "string"
            },
            marginBottom: {
              optional: !0,
              type: it,
              units: ot
            },
            marginLeft: {
              optional: !0,
              type: it,
              units: ot
            },
            marginRight: {
              optional: !0,
              type: it,
              units: ot
            },
            marginTop: {
              optional: !0,
              type: it,
              units: ot
            },
            maskBorder: {
              optional: !0,
              type: it,
              units: ot,
              min: 0
            },
            maskPosition: {
              optional: !0,
              type: "string"
            },
            maskSize: {
              optional: !0,
              type: "string"
            },
            maxHeight: {
              optional: !0,
              type: it,
              units: ot,
              min: 0
            },
            maxWidth: {
              optional: !0,
              type: it,
              units: ot,
              min: 0
            },
            objectPosition: {
              optional: !0,
              type: "string"
            },
            offset: {
              optional: !0,
              type: it,
              units: ot
            },
            offsetAnchor: {
              optional: !0,
              type: "string"
            },
            offsetDistance: {
              optional: !0,
              type: it,
              units: ot
            },
            offsetPath: {
              optional: !0,
              type: "string"
            },
            offsetPosition: {
              optional: !0,
              type: "string"
            },
            offsetRotate: {
              optional: !0,
              type: it,
              units: rt
            },
            opacity: {
              optional: !0,
              type: "number",
              min: 0,
              max: 1
            },
            order: {
              optional: !0,
              type: "number",
              integer: !0
            },
            outline: {
              optional: !0,
              type: "string"
            },
            outlineColor: {
              optional: !0,
              type: at
            },
            outlineOffset: {
              optional: !0,
              type: it,
              units: ot
            },
            outlineRadius: {
              optional: !0,
              type: it,
              units: ot
            },
            outlineRadiusBottomleft: {
              optional: !0,
              type: it,
              units: ot
            },
            outlineRadiusBottomright: {
              optional: !0,
              type: it,
              units: ot
            },
            outlineRadiusTopleft: {
              optional: !0,
              type: it,
              units: ot
            },
            outlineRadiusTopright: {
              optional: !0,
              type: it,
              units: ot
            },
            outlineWidth: {
              optional: !0,
              type: it,
              units: ot
            },
            padding: {
              optional: !0,
              type: it,
              units: ot
            },
            paddingBottom: {
              optional: !0,
              type: it,
              units: ot
            },
            paddingLeft: {
              optional: !0,
              type: it,
              units: ot
            },
            paddingRight: {
              optional: !0,
              type: it,
              units: ot
            },
            paddingTop: {
              optional: !0,
              type: it,
              units: ot
            },
            perspective: {
              optional: !0,
              type: it,
              units: ot
            },
            perspectiveOrigin: {
              optional: !0,
              type: "string"
            },
            right: {
              optional: !0,
              type: it,
              units: ot
            },
            rotate: {
              optional: !0,
              type: it,
              units: rt
            },
            rowGap: {
              optional: !0,
              type: it,
              units: ot
            },
            scale: {
              optional: !0,
              type: "number",
              min: 0
            },
            scrollbarColor: {
              optional: !0,
              type: at
            },
            scrollMargin: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollMarginBlock: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollMarginBlockEnd: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollMarginBlockStart: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollMarginBottom: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollMarginInline: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollMarginInlineEnd: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollMarginInlineStart: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollMarginLeft: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollMarginRight: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollMarginTop: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPadding: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPaddingBlock: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPaddingBlockEnd: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPaddingBlockStart: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPaddingBottom: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPaddingInline: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPaddingInlineEnd: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPaddingInlineStart: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPaddingLeft: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPaddingRight: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollPaddingTop: {
              optional: !0,
              type: it,
              units: ot
            },
            scrollSnapCoordinate: {
              optional: !0,
              type: "string"
            },
            scrollSnapDestination: {
              optional: !0,
              type: it,
              units: ot
            },
            shapeImageThreshold: {
              optional: !0,
              type: "string"
            },
            shapeMargin: {
              optional: !0,
              type: it,
              units: ot
            },
            shapeOutside: {
              optional: !0,
              type: "string"
            },
            tabSize: {
              optional: !0,
              type: "string"
            },
            textDecoration: {
              optional: !0,
              type: "string"
            },
            textDecorationColor: {
              optional: !0,
              type: at
            },
            textDecorationThickness: {
              optional: !0,
              type: it,
              units: ot
            },
            textEmphasis: {
              optional: !0,
              type: "string"
            },
            textEmphasisColor: {
              optional: !0,
              type: at
            },
            textFillColor: {
              optional: !0,
              type: at
            },
            textIndent: {
              optional: !0,
              type: it,
              units: ot
            },
            textShadow: {
              optional: !0,
              type: "string"
            },
            textStroke: {
              optional: !0,
              type: "string"
            },
            textStrokeColor: {
              optional: !0,
              type: at
            },
            textUnderlineOffset: {
              optional: !0,
              type: it,
              units: ot
            },
            top: {
              optional: !0,
              type: it,
              units: ot
            },
            transform: {
              optional: !0,
              type: "object",
              props: {
                translateX: {
                  type: it,
                  units: ot,
                  optional: !0
                },
                translateY: {
                  type: it,
                  units: ot,
                  optional: !0
                },
                translateZ: {
                  type: it,
                  units: ot,
                  optional: !0
                },
                rotate: {
                  type: it,
                  units: rt,
                  optional: !0
                },
                rotateX: {
                  type: it,
                  units: rt,
                  optional: !0
                },
                rotateY: {
                  type: it,
                  units: rt,
                  optional: !0
                },
                rotateZ: {
                  type: it,
                  units: rt,
                  optional: !0
                },
                scale: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                scaleX: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                scaleY: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                scaleZ: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                skewX: {
                  type: it,
                  units: rt,
                  optional: !0
                },
                skewY: {
                  type: it,
                  units: rt,
                  optional: !0
                },
                perspective: {
                  type: it,
                  units: ot,
                  optional: !0
                }
              }
            },
            transformOrigin: {
              optional: !0,
              type: "string"
            },
            verticalAlign: {
              optional: !0,
              type: "string"
            },
            visibility: {
              optional: !0,
              type: "string"
            },
            width: {
              optional: !0,
              type: it,
              units: ot
            },
            wordSpacing: {
              optional: !0,
              type: it,
              units: ot
            },
            zIndex: {
              optional: !0,
              type: "number",
              integer: !0
            },
            zoom: {
              optional: !0,
              type: it,
              units: ["%"],
              min: 0
            }
          },
          transformOrigin: {
            type: "string"
          },
          verticalAlign: {
            type: "string"
          },
          visibility: {
            type: "string"
          },
          width: {
            type: it,
            units: ot
          },
          wordSpacing: {
            type: it,
            units: ot
          },
          zIndex: {
            type: "number",
            integer: !0
          },
          zoom: {
            type: it,
            units: ["%"],
            min: 0
          }
        }
      }
    }, {
      exportable: function (t) {
        u(e, t);
        var n = y(e);

        function e() {
          return i(this, e), n.apply(this, arguments);
        }

        return s(e, [{
          key: "onGetContext",
          value: function value() {
            this.pixelsAccuracy = this.attrs.pixelsAccuracy || 4, this.calculatedPoints = [];
            var t = this.context.getElements(this.targetValue.pathElement)[0];
            this.path = nt.path(t), this.isPathTargetInsideSVG = this.element instanceof SVGElement;
          }
        }, {
          key: "onProgress",
          value: function value(t) {
            var n,
                e = Math.round(this.path.totalLength / this.pixelsAccuracy * t) * this.pixelsAccuracy;
            if (null !== this.calculatedPoints[e] && void 0 !== this.calculatedPoints[e]) n = this.calculatedPoints[e];else {
              var o = nt.getPathProgress(this.path, e / this.path.totalLength, this.isPathTargetInsideSVG);
              n = "\n            translateX(".concat(o.x, "px)\n            translateY(").concat(o.y, "px)\n            rotate(").concat(o.angle, "deg)\n        "), this.calculatedPoints[e] = n;
            }
            this.element.style.transform = n;
          }
        }]), e;
      }(e.default.Effect),
      name: "MotionPath",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            positionOn: {
              type: "object",
              props: {
                pathElement: {
                  type: "string"
                }
              }
            }
          }
        }
      }
    }],
    compositeAttributes: et
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kissmybutton_motorcortex_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _kissmybutton_motorcortex_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kissmybutton_motorcortex_player__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kissmybutton_motorcortex___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _kissmybutton_motorcortex___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kissmybutton_motorcortex___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dist_motorcortex_anime_umd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _dist_motorcortex_anime_umd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dist_motorcortex_anime_umd__WEBPACK_IMPORTED_MODULE_2__);



var Anime = Object(_kissmybutton_motorcortex___WEBPACK_IMPORTED_MODULE_1__["loadPlugin"])(_dist_motorcortex_anime_umd__WEBPACK_IMPORTED_MODULE_2___default.a);
var css = "\n\n.wrapper {\n    background-color: #f7f7f7;\n    height:100%;\n    width:100%;\n    margin:0px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .container {\n\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    overflow: hidden;\n    color: #252056;\n    font-family: 'Montserrat', sans-serif;\n  }\n  .title {\n    font-size: 50px;\n    font-weight: bold;\n  }\n  .subTitle {\n    font-size: 30px;\n  }\n  .text{\n    font-size: 24px;\n    font-weight: 100;\n  }\n  .boxWidth,.boxColor,.boxRotate,.boxMove,.boxBorder {\n    background: #252056;\n    width: 250px;\n    height: 30px;\n    position: relative;\n    margin-left: 30px\n  }\n  .boxBorder{\n    width: 30px;\n    border-radius: 0%;\n  }\n  .boxMove{\n    left:0;\n    width: 30px;\n  }\n\n  .boxWidth{\n    width: 30px;\n  }\n\n  .boxColor{\n    background: rgb(37, 32, 86);\n  }\n\n  .boxRotate{\n    width:30px;\n    transform: rotate(0deg);\n  }\n\n  .demo{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    position: relative;\n  }\n  .demoWidth,.demoColor,.demoRotate,.demoMove,.demoBorder{\n    display: flex;\n    position: relative;\n    width: 100%;\n    justify-content: start;\n  }\n  .cls-1{\n    stroke-dasharray: 6000;\n    stroke-dashoffset: 6000;\n  }\n  .path-demo-container{\n    width: 100%;\n    height: 112px;\n    justify-content: start;\n  }\n  .demoPath{\n    position:absolute;\n    width: 30px;\n    height: 30px;\n    background: red;\n    top: -15px;\n    left: -15px;\n    opacity: 0.65;\n  }\n";
var html = "\n<div class=\"wrapper\">\n<div class=\"container\">\n  <div class=\"title\">MotorCortex</div>\n  <div class=\"subTitle\">Anime plugin</div>\n  <div class=\"text\">Demo:</div>\n  <div class=\"demo\">\n    <div class=\"path-demo-container\">\n      <div class=\"demoPath\"></div>\n      <svg width=\"256\" height=\"112\" viewBox=\"0 0 256 112\">\n        <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" d=\"M8,56 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z\"></path>\n      </svg>\n    </div>\n    <div class=\"demoWidth\">\n      <div class=\"text\">width :</div>\n      <div class=\"boxWidth\"></div>\n    </div>\n    <div class=\"demoColor\">\n      <div class=\"text\">background color :</div>\n      <div class=\"boxColor\"></div>\n    </div>\n    <div class=\"demoRotate\">\n      <div class=\"text\">Rotate :</div>\n      <div class=\"boxRotate\"></div>\n    </div>\n    <div class=\"demoMove\">\n      <div class=\"text\">Move with easings:</div>\n      <div class=\"boxMove\"> </div>\n    </div>\n    <div class=\"demoBorder\">\n      <div class=\"text\">Border :</div>\n      <div class=\"boxBorder\"> </div>\n    </div>\n  </div>\n\n  <div class=\"subTitle svgText\">svg </div>\n  <div class=\"svgBorder\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300px\" viewBox=\"0 0 495 464.3\"><defs><style>.cls-1{fill:none;stroke:#252056;stroke-miterlimit:10;stroke-width:3px;}.cls-2{fill:none;}</style></defs><title>mc2</title><g id=\"Layer_1\" data-name=\"Layer 1\"><path class=\"cls-1\" d=\"M86,368.6V128.8L195.3,253.4,86,368.6ZM496,18.1H419.8L246.4,197.3,86.3,18.1H4V479.3H80.5L299,250.1l119.6-125V370.5l-71.5-74.4a3.9,3.9,0,0,0-5.4-.1l-.2.2L293.2,348,418.6,479.3H496Z\" transform=\"translate(-2.5 -16.6)\"/></g><g id=\"Layer_2\" data-name=\"Layer 2\"><path class=\"cls-2\" d=\"M86,368.6V128.8L195.3,253.4,86,368.6ZM496,18.1H419.8L246.4,197.3,86.3,18.1H4V479.3H80.5L299,250.1l119.6-125V370.5l-71.5-74.4a3.9,3.9,0,0,0-5.4-.1l-.2.2L293.2,348,418.6,479.3H496Z\" transform=\"translate(-2.5 -16.6)\"/></g></svg> </div>\n\n</div>\n</div>";
var host = document.getElementById("clip");
var containerParams = {
  width: "612px",
  height: "800px"
};
var clip = new _kissmybutton_motorcortex___WEBPACK_IMPORTED_MODULE_1__["HTMLClip"]({
  css: css,
  html: html,
  host: host,
  fonts: [{
    type: "google-font",
    src: "https://fonts.googleapis.com/css?family=Montserrat:100,300,400,700,900&display=swap"
  }],
  containerParams: containerParams
});
var motionPath = new Anime.MotionPath({
  pixelsAccuracy: 5,
  animatedAttrs: {
    positionOn: {
      pathElement: "path"
    }
  }
}, {
  selector: ".demoPath",
  duration: 3000,
  repeats: 5
});
var boxWidth = new Anime.Anime({
  animatedAttrs: {
    width: "250px"
  }
}, {
  duration: 1700,
  selector: ".boxWidth",
  easing: "easeOutQuad"
});
var boxColor = new Anime.Anime({
  animatedAttrs: {
    background: "rgb(255, 0, 85)"
  },
  initialValues: {
    background: "rgb(37, 32, 86)"
  }
}, {
  duration: 1700,
  selector: ".boxColor",
  easing: "easeOutQuad"
});
var boxRotate = new Anime.Anime({
  animatedAttrs: {
    width: "30px",
    transform: {
      rotate: "360deg"
    }
  },
  initialValues: {
    width: "30cm",
    transform: {
      rotate: "0deg"
    }
  }
}, {
  duration: 1700,
  selector: ".boxRotate",
  easing: "easeOutQuad"
});
var boxMove = new Anime.Anime({
  animatedAttrs: {
    left: "220px"
  },
  initialValues: {
    left: "0px"
  }
}, {
  duration: 1700,
  selector: ".boxMove",
  easing: "easeOutBounce"
});
var boxBorder = new Anime.Anime({
  animatedAttrs: {
    borderRadius: "50%"
  },
  initialValues: {
    borderRadius: "0%"
  }
}, {
  duration: 1700,
  selector: ".boxBorder"
});
var svg = new Anime.Anime({
  animatedAttrs: {
    strokeDashoffset: 0
  },
  initialValues: {
    strokeDashoffset: 6000
  }
}, {
  duration: 3000,
  selector: ".cls-1"
});
var myGroup = new _kissmybutton_motorcortex___WEBPACK_IMPORTED_MODULE_1__["Group"]();
var gp2 = new _kissmybutton_motorcortex___WEBPACK_IMPORTED_MODULE_1__["Group"]();
gp2.addIncident(boxMove, 5100);
myGroup.addIncident(boxColor, 0);
myGroup.addIncident(boxRotate, 3400);
myGroup.addIncident(gp2, 5100);
myGroup.addIncident(boxBorder, 6800, 0);
clip.addIncident(boxWidth, 0);
clip.addIncident(myGroup, 4000);
clip.addIncident(motionPath, 0);
clip.addIncident(svg, 9500);
new _kissmybutton_motorcortex_player__WEBPACK_IMPORTED_MODULE_0___default.a({
  scaleToFit: true,
  clip: clip,
  theme: "mc-blue",
  preview: false,
  pointerEvents: false
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(6)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);