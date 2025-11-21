Script started on Sat Nov 15 23:10:09 2025
/Users/arsenhacatran/.zshrc:source:109: no such file or directory: /share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
[1m[7m%[27m[1m[0m                                                                                                                                                                           ]2;arsenhacatran@MacBook-Air-Arsen:~/Documents/Projects/insta-poster/backend]1;..oster/backend]7;file://MacBook-Air-Arsen.local/Users/arsenhacatran/Documents/Projects/insta-poster/backend\[0m[27m[24m[J[01;32m➜  [36mbackend[00m [K[?1h=[?2004h[32mscript[39m [4mclient.js[24m[16D[32mc[32md[39m[39m [39m[4ms[39m[4mr[39m[4mc[4m/[4ma[4mp[4mi[24m[24m [24m [24m [24m [24m [24m [10D[32mn[32mo[32md[24m[32me[39m[24m [24m[33m"[24m[33m/[24m[33mU[24m[33ms[24m[33me[33mrs/arsenhacatran/Documents/Projects/insta-poster/frontend/src/api/tempCodeRunnerFile.js"[39m[98D[32mn[32mp[32mm[39m[39m r[39mu[39mn[39m [39md[39me[39mv[39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [39m [87D[11D[32mu[32mv[32mi[32mc[32mo[32mr[32mn[39m src.main:app --reload --app-dir [4m.[24m
[K[A[52C[1B[K[A[52C[?1l>[?2004l[1B
]2;uvicorn src.main:app --reload --app-dir .]1;uvicorn[32mINFO[0m:     Will watch for changes in these directories: ['/Users/arsenhacatran/Documents/Projects/insta-poster/backend']
[32mINFO[0m:     Uvicorn running on [1mhttp://127.0.0.1:8000[0m (Press CTRL+C to quit)
[32mINFO[0m:     Started reloader process [[36m[1m6425[0m] using [36m[1mWatchFiles[0m
postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db
[32mINFO[0m:     Started server process [[36m6427[0m]
[32mINFO[0m:     Waiting for application startup.
[app] scheduler started
[scheduler] starting loop
[32mINFO[0m:     Application startup complete.
[32mINFO[0m:     127.0.0.1:56301 - "[1mGET /login HTTP/1.1[0m" [31m404 Not Found[0m
[32mINFO[0m:     127.0.0.1:56369 - "[1mGET /login HTTP/1.1[0m" [31m404 Not Found[0m
[32mINFO[0m:     127.0.0.1:56428 - "[1mPOST /login HTTP/1.1[0m" [31m404 Not Found[0m
[32mINFO[0m:     127.0.0.1:56529 - "[1mPOST /auth/login HTTP/1.1[0m" [31m422 Unprocessable Content[0m
[32mINFO[0m:     127.0.0.1:56688 - "[1mPOST /auth/login HTTP/1.1[0m" [31m422 Unprocessable Content[0m
[32mINFO[0m:     127.0.0.1:56891 - "[1mPOST /auth/login HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:57028 - "[1mPOST /auth/login HTTP/1.1[0m" [31m422 Unprocessable Content[0m
[32mINFO[0m:     127.0.0.1:57028 - "[1mPOST /auth/login HTTP/1.1[0m" [31m422 Unprocessable Content[0m
[32mINFO[0m:     127.0.0.1:57139 - "[1mPOST /auth/login HTTP/1.1[0m" [31m422 Unprocessable Content[0m
[32mINFO[0m:     127.0.0.1:57295 - "[1mPOST /auth/login HTTP/1.1[0m" [31m422 Unprocessable Content[0m
[32mINFO[0m:     127.0.0.1:57363 - "[1mPOST /auth/login HTTP/1.1[0m" [31m422 Unprocessable Content[0m
[32mINFO[0m:     127.0.0.1:57622 - "[1mGET /auth/me HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:57847 - "[1mGET /accounts HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:57847 - "[1mPOST /accounts HTTP/1.1[0m" [31m422 Unprocessable Content[0m
[32mINFO[0m:     127.0.0.1:57932 - "[1mPOST /accounts HTTP/1.1[0m" [31m422 Unprocessable Content[0m
[32mINFO[0m:     127.0.0.1:58013 - "[1mPOST /accounts HTTP/1.1[0m" [31m422 Unprocessable Content[0m
[32mINFO[0m:     127.0.0.1:58700 - "[1mPOST /accounts HTTP/1.1[0m" [91m500 Internal Server Error[0m
[31mERROR[0m:    Exception in ASGI application
Traceback (most recent call last):
  File "asyncpg/protocol/prepared_stmt.pyx", line 175, in asyncpg.protocol.protocol.PreparedStatementState._encode_bind_msg
  File "asyncpg/protocol/codecs/base.pyx", line 227, in asyncpg.protocol.protocol.Codec.encode
  File "asyncpg/protocol/codecs/base.pyx", line 129, in asyncpg.protocol.protocol.Codec.encode_scalar
  File "asyncpg/pgproto/./codecs/bytea.pyx", line 19, in asyncpg.pgproto.pgproto.bytea_encode
TypeError: a bytes-like object is required, not 'tuple'

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 534, in _prepare_and_execute
    self._rows = deque(await prepared_stmt.fetch(*parameters))
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/prepared_stmt.py", line 176, in fetch
    data = await self.__bind_execute(args, 0, timeout)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/prepared_stmt.py", line 267, in __bind_execute
    data, status, _ = await self.__do_execute(
                      ^^^^^^^^^^^^^^^^^^^^^^^^
        lambda protocol: protocol.bind_execute(
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            self._state, args, '', limit, True, timeout))
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/prepared_stmt.py", line 256, in __do_execute
    return await executor(protocol)
           ^^^^^^^^^^^^^^^^^^^^^^^^
  File "asyncpg/protocol/protocol.pyx", line 185, in bind_execute
  File "asyncpg/protocol/prepared_stmt.pyx", line 204, in asyncpg.protocol.protocol.PreparedStatementState._encode_bind_msg
asyncpg.exceptions.DataError: invalid input for query argument $4: (b'\xceK\x94\xb3\xba\x9a"0S\xa4x\xdaLBc\... (a bytes-like object is required, not 'tuple')

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/default.py", line 941, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 568, in execute
    self._adapt_connection.await_(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self._prepare_and_execute(operation, parameters)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 132, in await_only
    return current.parent.switch(awaitable)  # type: ignore[no-any-return,attr-defined] # noqa: E501
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 196, in greenlet_spawn
    value = await result
            ^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 546, in _prepare_and_execute
    self._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 497, in _handle_exception
    self._adapt_connection._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 780, in _handle_exception
    raise translated_error from error
sqlalchemy.dialects.postgresql.asyncpg.AsyncAdapt_asyncpg_dbapi.Error: <class 'asyncpg.exceptions.DataError'>: invalid input for query argument $4: (b'\xceK\x94\xb3\xba\x9a"0S\xa4x\xdaLBc\... (a bytes-like object is required, not 'tuple')

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/protocols/http/httptools_impl.py", line 401, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        self.scope, self.receive, self.send
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/middleware/proxy_headers.py", line 70, in __call__
    return await self.app(scope, receive, send)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/applications.py", line 1054, in __call__
    await super().__call__(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/applications.py", line 113, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/errors.py", line 187, in __call__
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/errors.py", line 165, in __call__
    await self.app(scope, receive, _send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/cors.py", line 85, in __call__
    await self.app(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/exceptions.py", line 62, in __call__
    await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 715, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 735, in app
    await route.handle(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 288, in handle
    await self.app(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 76, in app
    await wrap_app_handling_exceptions(app, request)(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 73, in app
    response = await f(request)
               ^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/routing.py", line 301, in app
    raw_response = await run_endpoint_function(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/routing.py", line 212, in run_endpoint_function
    return await dependant.call(**values)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/api/accounts.py", line 72, in create_account
    await session.commit()
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/ext/asyncio/session.py", line 1009, in commit
    await greenlet_spawn(self.sync_session.commit)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 203, in greenlet_spawn
    result = context.switch(value)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 2028, in commit
    trans.commit(_to_root=True)
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^
  File "<string>", line 2, in commit
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/state_changes.py", line 139, in _go
    ret_value = fn(self, *arg, **kw)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 1313, in commit
    self._prepare_impl()
    ~~~~~~~~~~~~~~~~~~^^
  File "<string>", line 2, in _prepare_impl
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/state_changes.py", line 139, in _go
    ret_value = fn(self, *arg, **kw)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 1288, in _prepare_impl
    self.session.flush()
    ~~~~~~~~~~~~~~~~~~^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 4352, in flush
    self._flush(objects)
    ~~~~~~~~~~~^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 4487, in _flush
    with util.safe_reraise():
         ~~~~~~~~~~~~~~~~~^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/langhelpers.py", line 146, in __exit__
    raise exc_value.with_traceback(exc_tb)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 4448, in _flush
    flush_context.execute()
    ~~~~~~~~~~~~~~~~~~~~~^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/unitofwork.py", line 466, in execute
    rec.execute(self)
    ~~~~~~~~~~~^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/unitofwork.py", line 642, in execute
    util.preloaded.orm_persistence.save_obj(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self.mapper,
        ^^^^^^^^^^^^
        uow.states_for_mapper_hierarchy(self.mapper, False, False),
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        uow,
        ^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/persistence.py", line 93, in save_obj
    _emit_insert_statements(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        base_mapper,
        ^^^^^^^^^^^^
    ...<3 lines>...
        insert,
        ^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/persistence.py", line 1233, in _emit_insert_statements
    result = connection.execute(
        statement,
        params,
        execution_options=execution_options,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1418, in execute
    return meth(
        self,
        distilled_parameters,
        execution_options or NO_OPTIONS,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
    return connection._execute_clauseelement(
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self, distilled_params, execution_options
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1640, in _execute_clauseelement
    ret = self._execute_context(
        dialect,
    ...<8 lines>...
        cache_hit=cache_hit,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1846, in _execute_context
    return self._exec_single_context(
           ~~~~~~~~~~~~~~~~~~~~~~~~~^
        dialect, context, statement, parameters
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
    self._handle_dbapi_exception(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        e, str_statement, effective_parameters, cursor, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 2355, in _handle_dbapi_exception
    raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/default.py", line 941, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 568, in execute
    self._adapt_connection.await_(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self._prepare_and_execute(operation, parameters)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 132, in await_only
    return current.parent.switch(awaitable)  # type: ignore[no-any-return,attr-defined] # noqa: E501
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 196, in greenlet_spawn
    value = await result
            ^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 546, in _prepare_and_execute
    self._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 497, in _handle_exception
    self._adapt_connection._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 780, in _handle_exception
    raise translated_error from error
sqlalchemy.exc.DBAPIError: (sqlalchemy.dialects.postgresql.asyncpg.Error) <class 'asyncpg.exceptions.DataError'>: invalid input for query argument $4: (b'\xceK\x94\xb3\xba\x9a"0S\xa4x\xdaLBc\... (a bytes-like object is required, not 'tuple')
[SQL: INSERT INTO instagram_accounts (id, name, ig_user_id, token_encrypted, token_iv, token_expires_at, created_by) VALUES ($1::UUID, $2::VARCHAR, $3::VARCHAR, $4::BYTEA, $5::BYTEA, $6::TIMESTAMP WITH TIME ZONE, $7::UUID) RETURNING instagram_accounts.created_at]
[parameters: (UUID('599a719f-8dcb-41e7-b506-89923d8ba91f'), 'Main Blog', '17841400000000000', (b'\xceK\x94\xb3\xba\x9a"0S\xa4x\xdaLBc\xff\x1cI\xa0\x15\xa9vb\xd9\x8fw\xe9\x1aTT32\xd6b\xf0\x0e\xee\xa0\xbbX\xc0\x19k\x18\xe6\\', b'y\xdcO\xd8s\xb4\x05\xcf\xb7\xd1\xa9\xad'), b'', datetime.datetime(2025, 12, 31, 23, 59, 59, tzinfo=TzInfo(UTC)), UUID('113eb255-6383-4dc5-b200-a907fd47ce6b'))]
(Background on this error at: https://sqlalche.me/e/20/dbapi)
[32mINFO[0m:     127.0.0.1:58782 - "[1mPOST /auth/login HTTP/1.1[0m" [32m200 OK[0m
^C[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m6427[0m]
[32mINFO[0m:     Stopping reloader process [[36m[1m6425[0m]
[1m[7m%[27m[1m[0m                                                                                                                                                                           ]2;arsenhacatran@MacBook-Air-Arsen:~/Documents/Projects/insta-poster/backend]1;..oster/backend]7;file://MacBook-Air-Arsen.local/Users/arsenhacatran/Documents/Projects/insta-poster/backend\[0m[27m[24m[J[01;32m➜  [36mbackend[00m [K[?1h=[?2004h[32muvicorn[39m src.main:app --reload --app-dir [4m.[24m
[K[A[52C[24m [1B[K[A[51C[1B[A[51C[4m.[24m[?1l>[?2004l[1B
]2;uvicorn src.main:app --reload --app-dir .]1;uvicorn[32mINFO[0m:     Will watch for changes in these directories: ['/Users/arsenhacatran/Documents/Projects/insta-poster/backend']
[32mINFO[0m:     Uvicorn running on [1mhttp://127.0.0.1:8000[0m (Press CTRL+C to quit)
[32mINFO[0m:     Started reloader process [[36m[1m36410[0m] using [36m[1mWatchFiles[0m
postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db
[32mINFO[0m:     Started server process [[36m36414[0m]
[32mINFO[0m:     Waiting for application startup.
[app] scheduler started
[scheduler] starting loop
[32mINFO[0m:     Application startup complete.
[32mINFO[0m:     127.0.0.1:56761 - "[1mPOST /accounts HTTP/1.1[0m" [91m500 Internal Server Error[0m
[31mERROR[0m:    Exception in ASGI application
Traceback (most recent call last):
  File "asyncpg/protocol/prepared_stmt.pyx", line 175, in asyncpg.protocol.protocol.PreparedStatementState._encode_bind_msg
  File "asyncpg/protocol/codecs/base.pyx", line 227, in asyncpg.protocol.protocol.Codec.encode
  File "asyncpg/protocol/codecs/base.pyx", line 129, in asyncpg.protocol.protocol.Codec.encode_scalar
  File "asyncpg/pgproto/./codecs/bytea.pyx", line 19, in asyncpg.pgproto.pgproto.bytea_encode
TypeError: a bytes-like object is required, not 'tuple'

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 534, in _prepare_and_execute
    self._rows = deque(await prepared_stmt.fetch(*parameters))
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/prepared_stmt.py", line 176, in fetch
    data = await self.__bind_execute(args, 0, timeout)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/prepared_stmt.py", line 267, in __bind_execute
    data, status, _ = await self.__do_execute(
                      ^^^^^^^^^^^^^^^^^^^^^^^^
        lambda protocol: protocol.bind_execute(
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            self._state, args, '', limit, True, timeout))
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/prepared_stmt.py", line 256, in __do_execute
    return await executor(protocol)
           ^^^^^^^^^^^^^^^^^^^^^^^^
  File "asyncpg/protocol/protocol.pyx", line 185, in bind_execute
  File "asyncpg/protocol/prepared_stmt.pyx", line 204, in asyncpg.protocol.protocol.PreparedStatementState._encode_bind_msg
asyncpg.exceptions.DataError: invalid input for query argument $4: (b'42v\xd9\xf4\xf8J\x98\x01\xfb\\\x17\\k... (a bytes-like object is required, not 'tuple')

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/default.py", line 941, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 568, in execute
    self._adapt_connection.await_(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self._prepare_and_execute(operation, parameters)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 132, in await_only
    return current.parent.switch(awaitable)  # type: ignore[no-any-return,attr-defined] # noqa: E501
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 196, in greenlet_spawn
    value = await result
            ^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 546, in _prepare_and_execute
    self._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 497, in _handle_exception
    self._adapt_connection._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 780, in _handle_exception
    raise translated_error from error
sqlalchemy.dialects.postgresql.asyncpg.AsyncAdapt_asyncpg_dbapi.Error: <class 'asyncpg.exceptions.DataError'>: invalid input for query argument $4: (b'42v\xd9\xf4\xf8J\x98\x01\xfb\\\x17\\k... (a bytes-like object is required, not 'tuple')

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/protocols/http/httptools_impl.py", line 401, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        self.scope, self.receive, self.send
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/middleware/proxy_headers.py", line 70, in __call__
    return await self.app(scope, receive, send)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/applications.py", line 1054, in __call__
    await super().__call__(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/applications.py", line 113, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/errors.py", line 187, in __call__
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/errors.py", line 165, in __call__
    await self.app(scope, receive, _send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/cors.py", line 85, in __call__
    await self.app(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/exceptions.py", line 62, in __call__
    await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 715, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 735, in app
    await route.handle(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 288, in handle
    await self.app(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 76, in app
    await wrap_app_handling_exceptions(app, request)(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 73, in app
    response = await f(request)
               ^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/routing.py", line 301, in app
    raw_response = await run_endpoint_function(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/routing.py", line 212, in run_endpoint_function
    return await dependant.call(**values)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/api/accounts.py", line 72, in create_account
    await session.commit()
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/ext/asyncio/session.py", line 1009, in commit
    await greenlet_spawn(self.sync_session.commit)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 203, in greenlet_spawn
    result = context.switch(value)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 2028, in commit
    trans.commit(_to_root=True)
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^
  File "<string>", line 2, in commit
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/state_changes.py", line 139, in _go
    ret_value = fn(self, *arg, **kw)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 1313, in commit
    self._prepare_impl()
    ~~~~~~~~~~~~~~~~~~^^
  File "<string>", line 2, in _prepare_impl
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/state_changes.py", line 139, in _go
    ret_value = fn(self, *arg, **kw)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 1288, in _prepare_impl
    self.session.flush()
    ~~~~~~~~~~~~~~~~~~^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 4352, in flush
    self._flush(objects)
    ~~~~~~~~~~~^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 4487, in _flush
    with util.safe_reraise():
         ~~~~~~~~~~~~~~~~~^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/langhelpers.py", line 146, in __exit__
    raise exc_value.with_traceback(exc_tb)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 4448, in _flush
    flush_context.execute()
    ~~~~~~~~~~~~~~~~~~~~~^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/unitofwork.py", line 466, in execute
    rec.execute(self)
    ~~~~~~~~~~~^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/unitofwork.py", line 642, in execute
    util.preloaded.orm_persistence.save_obj(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self.mapper,
        ^^^^^^^^^^^^
        uow.states_for_mapper_hierarchy(self.mapper, False, False),
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        uow,
        ^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/persistence.py", line 93, in save_obj
    _emit_insert_statements(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        base_mapper,
        ^^^^^^^^^^^^
    ...<3 lines>...
        insert,
        ^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/persistence.py", line 1233, in _emit_insert_statements
    result = connection.execute(
        statement,
        params,
        execution_options=execution_options,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1418, in execute
    return meth(
        self,
        distilled_parameters,
        execution_options or NO_OPTIONS,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
    return connection._execute_clauseelement(
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self, distilled_params, execution_options
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1640, in _execute_clauseelement
    ret = self._execute_context(
        dialect,
    ...<8 lines>...
        cache_hit=cache_hit,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1846, in _execute_context
    return self._exec_single_context(
           ~~~~~~~~~~~~~~~~~~~~~~~~~^
        dialect, context, statement, parameters
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
    self._handle_dbapi_exception(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        e, str_statement, effective_parameters, cursor, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 2355, in _handle_dbapi_exception
    raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/default.py", line 941, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 568, in execute
    self._adapt_connection.await_(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self._prepare_and_execute(operation, parameters)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 132, in await_only
    return current.parent.switch(awaitable)  # type: ignore[no-any-return,attr-defined] # noqa: E501
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 196, in greenlet_spawn
    value = await result
            ^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 546, in _prepare_and_execute
    self._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 497, in _handle_exception
    self._adapt_connection._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 780, in _handle_exception
    raise translated_error from error
sqlalchemy.exc.DBAPIError: (sqlalchemy.dialects.postgresql.asyncpg.Error) <class 'asyncpg.exceptions.DataError'>: invalid input for query argument $4: (b'42v\xd9\xf4\xf8J\x98\x01\xfb\\\x17\\k... (a bytes-like object is required, not 'tuple')
[SQL: INSERT INTO instagram_accounts (id, name, ig_user_id, token_encrypted, token_iv, token_expires_at, created_by) VALUES ($1::UUID, $2::VARCHAR, $3::VARCHAR, $4::BYTEA, $5::BYTEA, $6::TIMESTAMP WITH TIME ZONE, $7::UUID) RETURNING instagram_accounts.created_at]
[parameters: (UUID('5ff0366f-cbcd-40b8-9910-883c90a61807'), 'Main Blog', '17841400000000000', (b'42v\xd9\xf4\xf8J\x98\x01\xfb\\\x17\\k1\x88\x04\x96\xfe\x82\t"\xcc\xe5t2\x1e\x1f\x86\xe7\xd3\xa2\x88q\xa1O\xb5\xcd\xc4\xf3\xdb\x92\x92wp\x9e', b'\xdbU\xd3\xf765\tn\x9a\xd0:\x15'), b'', datetime.datetime(2025, 12, 31, 23, 59, 59, tzinfo=TzInfo(UTC)), UUID('113eb255-6383-4dc5-b200-a907fd47ce6b'))]
(Background on this error at: https://sqlalche.me/e/20/dbapi)
[33mWARNING[0m:  WatchFiles detected changes in 'src/models/instagram_account.py'. Reloading...
[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m36414[0m]
postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db
Process SpawnProcess-2:
Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/multiprocessing/process.py", line 313, in _bootstrap
    self.run()
    ~~~~~~~~^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/multiprocessing/process.py", line 108, in run
    self._target(*self._args, **self._kwargs)
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/_subprocess.py", line 80, in subprocess_started
    target(sockets=sockets)
    ~~~~~~^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/server.py", line 65, in run
    return asyncio.run(self.serve(sockets=sockets))
           ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/asyncio/runners.py", line 195, in run
    return runner.run(main)
           ~~~~~~~~~~^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/asyncio/runners.py", line 118, in run
    return self._loop.run_until_complete(task)
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "uvloop/loop.pyx", line 1518, in uvloop.loop.Loop.run_until_complete
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/server.py", line 69, in serve
    await self._serve(sockets)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/server.py", line 76, in _serve
    config.load()
    ~~~~~~~~~~~^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/config.py", line 434, in load
    self.loaded_app = import_from_string(self.app)
                      ~~~~~~~~~~~~~~~~~~^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/importer.py", line 19, in import_from_string
    module = importlib.import_module(module_str)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/importlib/__init__.py", line 88, in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
           ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "<frozen importlib._bootstrap>", line 1387, in _gcd_import
  File "<frozen importlib._bootstrap>", line 1360, in _find_and_load
  File "<frozen importlib._bootstrap>", line 1331, in _find_and_load_unlocked
  File "<frozen importlib._bootstrap>", line 935, in _load_unlocked
  File "<frozen importlib._bootstrap_external>", line 1026, in exec_module
  File "<frozen importlib._bootstrap>", line 488, in _call_with_frames_removed
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/main.py", line 9, in <module>
    from src.api.accounts import router as accounts_router
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/api/accounts.py", line 12, in <module>
    from ..models.instagram_account import InstagramAccount
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/models/instagram_account.py", line 11, in <module>
    class InstagramAccount(Base):
    ...<25 lines>...
        )
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/models/instagram_account.py", line 22, in InstagramAccount
    access_token: Mapped[str] = mapped_column(Text, nullable=False)
                                              ^^^^
NameError: name 'Text' is not defined. Did you mean: 'text'?
[33mWARNING[0m:  WatchFiles detected changes in 'src/models/instagram_account.py'. Reloading...
postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db
[32mINFO[0m:     Started server process [[36m36683[0m]
[32mINFO[0m:     Waiting for application startup.
[app] scheduler started
[scheduler] starting loop
[32mINFO[0m:     Application startup complete.
[33mWARNING[0m:  WatchFiles detected changes in 'src/api/accounts.py'. Reloading...
[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m36683[0m]
postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db
[32mINFO[0m:     Started server process [[36m36752[0m]
[32mINFO[0m:     Waiting for application startup.
[app] scheduler started
[scheduler] starting loop
[32mINFO[0m:     Application startup complete.
[32mINFO[0m:     127.0.0.1:58650 - "[1mPOST /accounts HTTP/1.1[0m" [91m500 Internal Server Error[0m
[31mERROR[0m:    Exception in ASGI application
Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 510, in _prepare_and_execute
    prepared_stmt, attributes = await adapt_connection._prepare(
                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        operation, self._invalidate_schema_cache_asof
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 756, in _prepare
    prepared_stmt = await self._connection.prepare(
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        operation, name=self._prepared_statement_name_func()
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/connection.py", line 635, in prepare
    return await self._prepare(
           ^^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/connection.py", line 653, in _prepare
    stmt = await self._get_statement(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/connection.py", line 432, in _get_statement
    statement = await self._protocol.prepare(
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
    )
    ^
  File "asyncpg/protocol/protocol.pyx", line 165, in prepare
asyncpg.exceptions.UndefinedColumnError: column instagram_accounts.access_token does not exist

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/default.py", line 941, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 568, in execute
    self._adapt_connection.await_(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self._prepare_and_execute(operation, parameters)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 132, in await_only
    return current.parent.switch(awaitable)  # type: ignore[no-any-return,attr-defined] # noqa: E501
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 196, in greenlet_spawn
    value = await result
            ^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 546, in _prepare_and_execute
    self._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 497, in _handle_exception
    self._adapt_connection._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 780, in _handle_exception
    raise translated_error from error
sqlalchemy.dialects.postgresql.asyncpg.AsyncAdapt_asyncpg_dbapi.ProgrammingError: <class 'asyncpg.exceptions.UndefinedColumnError'>: column instagram_accounts.access_token does not exist

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/protocols/http/httptools_impl.py", line 401, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        self.scope, self.receive, self.send
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/middleware/proxy_headers.py", line 70, in __call__
    return await self.app(scope, receive, send)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/applications.py", line 1054, in __call__
    await super().__call__(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/applications.py", line 113, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/errors.py", line 187, in __call__
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/errors.py", line 165, in __call__
    await self.app(scope, receive, _send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/cors.py", line 85, in __call__
    await self.app(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/exceptions.py", line 62, in __call__
    await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 715, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 735, in app
    await route.handle(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 288, in handle
    await self.app(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 76, in app
    await wrap_app_handling_exceptions(app, request)(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 73, in app
    response = await f(request)
               ^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/routing.py", line 301, in app
    raw_response = await run_endpoint_function(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/routing.py", line 212, in run_endpoint_function
    return await dependant.call(**values)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/api/accounts.py", line 52, in create_account
    existing = await session.execute(
               ^^^^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/ext/asyncio/session.py", line 461, in execute
    result = await greenlet_spawn(
             ^^^^^^^^^^^^^^^^^^^^^
    ...<6 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 201, in greenlet_spawn
    result = context.throw(*sys.exc_info())
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 2362, in execute
    return self._execute_internal(
           ~~~~~~~~~~~~~~~~~~~~~~^
        statement,
        ^^^^^^^^^^
    ...<4 lines>...
        _add_event=_add_event,
        ^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 2247, in _execute_internal
    result: Result[Any] = compile_state_cls.orm_execute_statement(
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self,
        ^^^^^
    ...<4 lines>...
        conn,
        ^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/context.py", line 305, in orm_execute_statement
    result = conn.execute(
        statement, params or {}, execution_options=execution_options
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1418, in execute
    return meth(
        self,
        distilled_parameters,
        execution_options or NO_OPTIONS,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
    return connection._execute_clauseelement(
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self, distilled_params, execution_options
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1640, in _execute_clauseelement
    ret = self._execute_context(
        dialect,
    ...<8 lines>...
        cache_hit=cache_hit,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1846, in _execute_context
    return self._exec_single_context(
           ~~~~~~~~~~~~~~~~~~~~~~~~~^
        dialect, context, statement, parameters
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
    self._handle_dbapi_exception(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        e, str_statement, effective_parameters, cursor, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 2355, in _handle_dbapi_exception
    raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/default.py", line 941, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 568, in execute
    self._adapt_connection.await_(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self._prepare_and_execute(operation, parameters)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 132, in await_only
    return current.parent.switch(awaitable)  # type: ignore[no-any-return,attr-defined] # noqa: E501
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 196, in greenlet_spawn
    value = await result
            ^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 546, in _prepare_and_execute
    self._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 497, in _handle_exception
    self._adapt_connection._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 780, in _handle_exception
    raise translated_error from error
sqlalchemy.exc.ProgrammingError: (sqlalchemy.dialects.postgresql.asyncpg.ProgrammingError) <class 'asyncpg.exceptions.UndefinedColumnError'>: column instagram_accounts.access_token does not exist
[SQL: SELECT instagram_accounts.id, instagram_accounts.name, instagram_accounts.ig_user_id, instagram_accounts.access_token, instagram_accounts.token_expires_at, instagram_accounts.created_by, instagram_accounts.created_at 
FROM instagram_accounts 
WHERE instagram_accounts.ig_user_id = $1::VARCHAR]
[parameters: ('17841400000000000',)]
(Background on this error at: https://sqlalche.me/e/20/f405)
[32mINFO[0m:     127.0.0.1:58783 - "[1mPOST /accounts HTTP/1.1[0m" [91m500 Internal Server Error[0m
[31mERROR[0m:    Exception in ASGI application
Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 510, in _prepare_and_execute
    prepared_stmt, attributes = await adapt_connection._prepare(
                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        operation, self._invalidate_schema_cache_asof
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 756, in _prepare
    prepared_stmt = await self._connection.prepare(
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        operation, name=self._prepared_statement_name_func()
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/connection.py", line 635, in prepare
    return await self._prepare(
           ^^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/connection.py", line 653, in _prepare
    stmt = await self._get_statement(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/connection.py", line 432, in _get_statement
    statement = await self._protocol.prepare(
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
    )
    ^
  File "asyncpg/protocol/protocol.pyx", line 165, in prepare
asyncpg.exceptions.UndefinedColumnError: column instagram_accounts.access_token does not exist

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/default.py", line 941, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 568, in execute
    self._adapt_connection.await_(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self._prepare_and_execute(operation, parameters)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 132, in await_only
    return current.parent.switch(awaitable)  # type: ignore[no-any-return,attr-defined] # noqa: E501
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 196, in greenlet_spawn
    value = await result
            ^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 546, in _prepare_and_execute
    self._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 497, in _handle_exception
    self._adapt_connection._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 780, in _handle_exception
    raise translated_error from error
sqlalchemy.dialects.postgresql.asyncpg.AsyncAdapt_asyncpg_dbapi.ProgrammingError: <class 'asyncpg.exceptions.UndefinedColumnError'>: column instagram_accounts.access_token does not exist

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/protocols/http/httptools_impl.py", line 401, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        self.scope, self.receive, self.send
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/middleware/proxy_headers.py", line 70, in __call__
    return await self.app(scope, receive, send)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/applications.py", line 1054, in __call__
    await super().__call__(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/applications.py", line 113, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/errors.py", line 187, in __call__
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/errors.py", line 165, in __call__
    await self.app(scope, receive, _send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/cors.py", line 85, in __call__
    await self.app(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/exceptions.py", line 62, in __call__
    await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 715, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 735, in app
    await route.handle(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 288, in handle
    await self.app(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 76, in app
    await wrap_app_handling_exceptions(app, request)(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 73, in app
    response = await f(request)
               ^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/routing.py", line 301, in app
    raw_response = await run_endpoint_function(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/routing.py", line 212, in run_endpoint_function
    return await dependant.call(**values)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/api/accounts.py", line 52, in create_account
    existing = await session.execute(
               ^^^^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/ext/asyncio/session.py", line 461, in execute
    result = await greenlet_spawn(
             ^^^^^^^^^^^^^^^^^^^^^
    ...<6 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 201, in greenlet_spawn
    result = context.throw(*sys.exc_info())
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 2362, in execute
    return self._execute_internal(
           ~~~~~~~~~~~~~~~~~~~~~~^
        statement,
        ^^^^^^^^^^
    ...<4 lines>...
        _add_event=_add_event,
        ^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 2247, in _execute_internal
    result: Result[Any] = compile_state_cls.orm_execute_statement(
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self,
        ^^^^^
    ...<4 lines>...
        conn,
        ^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/context.py", line 305, in orm_execute_statement
    result = conn.execute(
        statement, params or {}, execution_options=execution_options
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1418, in execute
    return meth(
        self,
        distilled_parameters,
        execution_options or NO_OPTIONS,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
    return connection._execute_clauseelement(
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self, distilled_params, execution_options
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1640, in _execute_clauseelement
    ret = self._execute_context(
        dialect,
    ...<8 lines>...
        cache_hit=cache_hit,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1846, in _execute_context
    return self._exec_single_context(
           ~~~~~~~~~~~~~~~~~~~~~~~~~^
        dialect, context, statement, parameters
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
    self._handle_dbapi_exception(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        e, str_statement, effective_parameters, cursor, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 2355, in _handle_dbapi_exception
    raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/default.py", line 941, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 568, in execute
    self._adapt_connection.await_(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self._prepare_and_execute(operation, parameters)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 132, in await_only
    return current.parent.switch(awaitable)  # type: ignore[no-any-return,attr-defined] # noqa: E501
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 196, in greenlet_spawn
    value = await result
            ^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 546, in _prepare_and_execute
    self._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 497, in _handle_exception
    self._adapt_connection._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 780, in _handle_exception
    raise translated_error from error
sqlalchemy.exc.ProgrammingError: (sqlalchemy.dialects.postgresql.asyncpg.ProgrammingError) <class 'asyncpg.exceptions.UndefinedColumnError'>: column instagram_accounts.access_token does not exist
[SQL: SELECT instagram_accounts.id, instagram_accounts.name, instagram_accounts.ig_user_id, instagram_accounts.access_token, instagram_accounts.token_expires_at, instagram_accounts.created_by, instagram_accounts.created_at 
FROM instagram_accounts 
WHERE instagram_accounts.ig_user_id = $1::VARCHAR]
[parameters: ('17841400000000001',)]
(Background on this error at: https://sqlalche.me/e/20/f405)
^C[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m36752[0m]
[32mINFO[0m:     Stopping reloader process [[36m[1m36410[0m]
[1m[7m%[27m[1m[0m                                                                                                                                                                           ]2;arsenhacatran@MacBook-Air-Arsen:~/Documents/Projects/insta-poster/backend]1;..oster/backend]7;file://MacBook-Air-Arsen.local/Users/arsenhacatran/Documents/Projects/insta-poster/backend\[0m[27m[24m[J[01;32m➜  [36mbackend[00m [K[?1h=[?2004h[32muvicorn[39m src.main:app --reload --app-dir [4m.[24m
[K[A[52C[1B[K[A[52C[?1l>[?2004l[1B
]2;uvicorn src.main:app --reload --app-dir .]1;uvicorn[32mINFO[0m:     Will watch for changes in these directories: ['/Users/arsenhacatran/Documents/Projects/insta-poster/backend']
[32mINFO[0m:     Uvicorn running on [1mhttp://127.0.0.1:8000[0m (Press CTRL+C to quit)
[32mINFO[0m:     Started reloader process [[36m[1m36784[0m] using [36m[1mWatchFiles[0m
postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db
[32mINFO[0m:     Started server process [[36m36786[0m]
[32mINFO[0m:     Waiting for application startup.
[app] scheduler started
[scheduler] starting loop
[32mINFO[0m:     Application startup complete.
[32mINFO[0m:     127.0.0.1:58832 - "[1mPOST /accounts HTTP/1.1[0m" [91m500 Internal Server Error[0m
[31mERROR[0m:    Exception in ASGI application
Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 510, in _prepare_and_execute
    prepared_stmt, attributes = await adapt_connection._prepare(
                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        operation, self._invalidate_schema_cache_asof
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 756, in _prepare
    prepared_stmt = await self._connection.prepare(
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        operation, name=self._prepared_statement_name_func()
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/connection.py", line 635, in prepare
    return await self._prepare(
           ^^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/connection.py", line 653, in _prepare
    stmt = await self._get_statement(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/asyncpg/connection.py", line 432, in _get_statement
    statement = await self._protocol.prepare(
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
    )
    ^
  File "asyncpg/protocol/protocol.pyx", line 165, in prepare
asyncpg.exceptions.UndefinedColumnError: column instagram_accounts.access_token does not exist

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/default.py", line 941, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 568, in execute
    self._adapt_connection.await_(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self._prepare_and_execute(operation, parameters)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 132, in await_only
    return current.parent.switch(awaitable)  # type: ignore[no-any-return,attr-defined] # noqa: E501
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 196, in greenlet_spawn
    value = await result
            ^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 546, in _prepare_and_execute
    self._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 497, in _handle_exception
    self._adapt_connection._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 780, in _handle_exception
    raise translated_error from error
sqlalchemy.dialects.postgresql.asyncpg.AsyncAdapt_asyncpg_dbapi.ProgrammingError: <class 'asyncpg.exceptions.UndefinedColumnError'>: column instagram_accounts.access_token does not exist

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/protocols/http/httptools_impl.py", line 401, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        self.scope, self.receive, self.send
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/middleware/proxy_headers.py", line 70, in __call__
    return await self.app(scope, receive, send)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/applications.py", line 1054, in __call__
    await super().__call__(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/applications.py", line 113, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/errors.py", line 187, in __call__
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/errors.py", line 165, in __call__
    await self.app(scope, receive, _send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/cors.py", line 85, in __call__
    await self.app(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/middleware/exceptions.py", line 62, in __call__
    await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 715, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 735, in app
    await route.handle(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 288, in handle
    await self.app(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 76, in app
    await wrap_app_handling_exceptions(app, request)(scope, receive, send)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/starlette/routing.py", line 73, in app
    response = await f(request)
               ^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/routing.py", line 301, in app
    raw_response = await run_endpoint_function(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/fastapi/routing.py", line 212, in run_endpoint_function
    return await dependant.call(**values)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/api/accounts.py", line 52, in create_account
    existing = await session.execute(
               ^^^^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/ext/asyncio/session.py", line 461, in execute
    result = await greenlet_spawn(
             ^^^^^^^^^^^^^^^^^^^^^
    ...<6 lines>...
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 201, in greenlet_spawn
    result = context.throw(*sys.exc_info())
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 2362, in execute
    return self._execute_internal(
           ~~~~~~~~~~~~~~~~~~~~~~^
        statement,
        ^^^^^^^^^^
    ...<4 lines>...
        _add_event=_add_event,
        ^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/session.py", line 2247, in _execute_internal
    result: Result[Any] = compile_state_cls.orm_execute_statement(
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self,
        ^^^^^
    ...<4 lines>...
        conn,
        ^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/orm/context.py", line 305, in orm_execute_statement
    result = conn.execute(
        statement, params or {}, execution_options=execution_options
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1418, in execute
    return meth(
        self,
        distilled_parameters,
        execution_options or NO_OPTIONS,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
    return connection._execute_clauseelement(
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self, distilled_params, execution_options
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1640, in _execute_clauseelement
    ret = self._execute_context(
        dialect,
    ...<8 lines>...
        cache_hit=cache_hit,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1846, in _execute_context
    return self._exec_single_context(
           ~~~~~~~~~~~~~~~~~~~~~~~~~^
        dialect, context, statement, parameters
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
    self._handle_dbapi_exception(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        e, str_statement, effective_parameters, cursor, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 2355, in _handle_dbapi_exception
    raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/engine/default.py", line 941, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 568, in execute
    self._adapt_connection.await_(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self._prepare_and_execute(operation, parameters)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 132, in await_only
    return current.parent.switch(awaitable)  # type: ignore[no-any-return,attr-defined] # noqa: E501
           ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/util/_concurrency_py3k.py", line 196, in greenlet_spawn
    value = await result
            ^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 546, in _prepare_and_execute
    self._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 497, in _handle_exception
    self._adapt_connection._handle_exception(error)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/sqlalchemy/dialects/postgresql/asyncpg.py", line 780, in _handle_exception
    raise translated_error from error
sqlalchemy.exc.ProgrammingError: (sqlalchemy.dialects.postgresql.asyncpg.ProgrammingError) <class 'asyncpg.exceptions.UndefinedColumnError'>: column instagram_accounts.access_token does not exist
[SQL: SELECT instagram_accounts.id, instagram_accounts.name, instagram_accounts.ig_user_id, instagram_accounts.access_token, instagram_accounts.token_expires_at, instagram_accounts.created_by, instagram_accounts.created_at 
FROM instagram_accounts 
WHERE instagram_accounts.ig_user_id = $1::VARCHAR]
[parameters: ('17841400000000001',)]
(Background on this error at: https://sqlalche.me/e/20/f405)
[33mWARNING[0m:  WatchFiles detected changes in 'src/api/accounts.py'. Reloading...
[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m36786[0m]
postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db
Process SpawnProcess-2:
Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/multiprocessing/process.py", line 313, in _bootstrap
    self.run()
    ~~~~~~~~^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/multiprocessing/process.py", line 108, in run
    self._target(*self._args, **self._kwargs)
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/_subprocess.py", line 80, in subprocess_started
    target(sockets=sockets)
    ~~~~~~^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/server.py", line 65, in run
    return asyncio.run(self.serve(sockets=sockets))
           ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/asyncio/runners.py", line 195, in run
    return runner.run(main)
           ~~~~~~~~~~^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/asyncio/runners.py", line 118, in run
    return self._loop.run_until_complete(task)
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "uvloop/loop.pyx", line 1518, in uvloop.loop.Loop.run_until_complete
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/server.py", line 69, in serve
    await self._serve(sockets)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/server.py", line 76, in _serve
    config.load()
    ~~~~~~~~~~~^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/config.py", line 434, in load
    self.loaded_app = import_from_string(self.app)
                      ~~~~~~~~~~~~~~~~~~^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/uvicorn/importer.py", line 19, in import_from_string
    module = importlib.import_module(module_str)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/importlib/__init__.py", line 88, in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
           ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "<frozen importlib._bootstrap>", line 1387, in _gcd_import
  File "<frozen importlib._bootstrap>", line 1360, in _find_and_load
  File "<frozen importlib._bootstrap>", line 1331, in _find_and_load_unlocked
  File "<frozen importlib._bootstrap>", line 935, in _load_unlocked
  File "<frozen importlib._bootstrap_external>", line 1026, in exec_module
  File "<frozen importlib._bootstrap>", line 488, in _call_with_frames_removed
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/main.py", line 9, in <module>
    from src.api.accounts import router as accounts_router
  File "/Users/arsenhacatran/Documents/Projects/insta-poster/backend/src/api/accounts.py", line 31, in <module>
    class AccountOut(AccountBase):
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<4 lines>...
            from_attributes = True  # для Pydantic v2
            ^^^^^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_model_construction.py", line 224, in __new__
    complete_model_class(
    ~~~~~~~~~~~~~~~~~~~~^
        cls,
        ^^^^
    ...<4 lines>...
        create_model_module=_create_model_module,
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_model_construction.py", line 577, in complete_model_class
    schema = cls.__get_pydantic_core_schema__(cls, handler)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/main.py", line 671, in __get_pydantic_core_schema__
    return handler(source)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_schema_generation_shared.py", line 83, in __call__
    schema = self._handler(source_type)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_generate_schema.py", line 655, in generate_schema
    schema = self._generate_schema_inner(obj)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_generate_schema.py", line 924, in _generate_schema_inner
    return self._model_schema(obj)
           ~~~~~~~~~~~~~~~~~~^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_generate_schema.py", line 739, in _model_schema
    {k: self._generate_md_field_schema(k, v, decorators) for k, v in fields.items()},
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_generate_schema.py", line 1115, in _generate_md_field_schema
    common_field = self._common_field_schema(name, field_info, decorators)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_generate_schema.py", line 1308, in _common_field_schema
    schema = self._apply_annotations(
        source_type,
        annotations + validators_from_decorators,
    )
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_generate_schema.py", line 2107, in _apply_annotations
    schema = get_inner_schema(source_type)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_schema_generation_shared.py", line 83, in __call__
    schema = self._handler(source_type)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_generate_schema.py", line 2088, in inner_handler
    schema = self._generate_schema_inner(obj)
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_generate_schema.py", line 929, in _generate_schema_inner
    return self.match_type(obj)
           ~~~~~~~~~~~~~~~^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_generate_schema.py", line 1038, in match_type
    return self._unknown_type_schema(obj)
           ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^
  File "/Library/Frameworks/Python.framework/Versions/3.13/lib/python3.13/site-packages/pydantic/_internal/_generate_schema.py", line 558, in _unknown_type_schema
    raise PydanticSchemaGenerationError(
    ...<7 lines>...
    )
pydantic.errors.PydanticSchemaGenerationError: Unable to generate pydantic-core schema for <class 'sqlalchemy.sql.sqltypes.UUID'>. Set `arbitrary_types_allowed=True` in the model_config to ignore this error or implement `__get_pydantic_core_schema__` on your type to fully support it.

If you got this error by calling handler(<some type>) within `__get_pydantic_core_schema__` then you likely need to call `handler.generate_schema(<some type>)` since we do not call `__get_pydantic_core_schema__` on `<some type>` otherwise to avoid infinite recursion.

For further information visit https://errors.pydantic.dev/2.9/u/schema-for-unknown-type
[33mWARNING[0m:  WatchFiles detected changes in 'src/api/accounts.py'. Reloading...
postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db
[32mINFO[0m:     Started server process [[36m36920[0m]
[32mINFO[0m:     Waiting for application startup.
[app] scheduler started
[scheduler] starting loop
[32mINFO[0m:     Application startup complete.
[33mWARNING[0m:  WatchFiles detected changes in 'src/api/accounts.py'. Reloading...
[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m36920[0m]
postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db
[32mINFO[0m:     Started server process [[36m36939[0m]
[32mINFO[0m:     Waiting for application startup.
[app] scheduler started
[scheduler] starting loop
[32mINFO[0m:     Application startup complete.
[33mWARNING[0m:  WatchFiles detected changes in 'alembic/versions/5334b1a0d711_init_core_tables.py', 'alembic/env.py'. Reloading...
[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m36939[0m]
postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db
[32mINFO[0m:     Started server process [[36m37262[0m]
[32mINFO[0m:     Waiting for application startup.
[app] scheduler started
[scheduler] starting loop
[32mINFO[0m:     Application startup complete.
^C[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m37262[0m]
[32mINFO[0m:     Stopping reloader process [[36m[1m36784[0m]
[1m[7m%[27m[1m[0m                                                                                                                                                                           ]2;arsenhacatran@MacBook-Air-Arsen:~/Documents/Projects/insta-poster/backend]1;..oster/backend]7;file://MacBook-Air-Arsen.local/Users/arsenhacatran/Documents/Projects/insta-poster/backend\[0m[27m[24m[J[01;32m➜  [36mbackend[00m [K[?1h=[?2004h