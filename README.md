# luke-tyler-proj

## Commands

### First time setup

```bash
./setup.sh
```

### Building all apps/packages

```bash
pnpm run build --recursive
```

### Building a specific app/package

```bash
pnpm --filter <APP/PACKAGE> run build
```

### Testing all apps/packages

```bash
pnpm run test --recursive
```

### Testing a specific app/package

```bash
pnpm --filter <APP/PACKAGE> run test
```

### Linting all apps/packages

```bash
pnpm run lint --recursive
```

### Linting a specific app/package

```bash
pnpm --filter <APP/PACKAGE> run lint
```

### Formatting all apps/packages

```bash
pnpm run format --recursive
```

### Formatting a specific app/package

```bash
pnpm --filter <APP/PACKAGE> run t
```
