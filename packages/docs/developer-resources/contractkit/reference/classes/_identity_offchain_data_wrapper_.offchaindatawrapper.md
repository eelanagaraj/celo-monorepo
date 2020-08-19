# Class: OffchainDataWrapper

## Hierarchy

* **OffchainDataWrapper**

## Index

### Constructors

* [constructor](_identity_offchain_data_wrapper_.offchaindatawrapper.md#constructor)

### Properties

* [kit](_identity_offchain_data_wrapper_.offchaindatawrapper.md#kit)
* [readDataFrom](_identity_offchain_data_wrapper_.offchaindatawrapper.md#readdatafrom)
* [self](_identity_offchain_data_wrapper_.offchaindatawrapper.md#self)
* [storageWriter](_identity_offchain_data_wrapper_.offchaindatawrapper.md#storagewriter)

### Methods

* [readDataFromAsResult](_identity_offchain_data_wrapper_.offchaindatawrapper.md#readdatafromasresult)
* [writeDataTo](_identity_offchain_data_wrapper_.offchaindatawrapper.md#writedatato)

## Constructors

###  constructor

\+ **new OffchainDataWrapper**(`self`: string, `kit`: [ContractKit](_kit_.contractkit.md)): *[OffchainDataWrapper](_identity_offchain_data_wrapper_.offchaindatawrapper.md)*

*Defined in [packages/contractkit/src/identity/offchain-data-wrapper.ts:33](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain-data-wrapper.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`self` | string |
`kit` | [ContractKit](_kit_.contractkit.md) |

**Returns:** *[OffchainDataWrapper](_identity_offchain_data_wrapper_.offchaindatawrapper.md)*

## Properties

###  kit

• **kit**: *[ContractKit](_kit_.contractkit.md)*

*Defined in [packages/contractkit/src/identity/offchain-data-wrapper.ts:35](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain-data-wrapper.ts#L35)*

___

###  readDataFrom

• **readDataFrom**: *function* = makeAsyncThrowable(this.readDataFromAsResult)

*Defined in [packages/contractkit/src/identity/offchain-data-wrapper.ts:66](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain-data-wrapper.ts#L66)*

#### Type declaration:

▸ (...`args`: TArgs): *Promise‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | TArgs |

___

###  self

• **self**: *string*

*Defined in [packages/contractkit/src/identity/offchain-data-wrapper.ts:35](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain-data-wrapper.ts#L35)*

___

###  storageWriter

• **storageWriter**: *[StorageWriter](_identity_offchain_storage_writers_.storagewriter.md) | undefined*

*Defined in [packages/contractkit/src/identity/offchain-data-wrapper.ts:33](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain-data-wrapper.ts#L33)*

## Methods

###  readDataFromAsResult

▸ **readDataFromAsResult**(`account`: string, `dataPath`: string): *Promise‹Result‹string, [OffchainErrors](../modules/_identity_offchain_data_wrapper_.md#offchainerrors)››*

*Defined in [packages/contractkit/src/identity/offchain-data-wrapper.ts:37](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain-data-wrapper.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | string |
`dataPath` | string |

**Returns:** *Promise‹Result‹string, [OffchainErrors](../modules/_identity_offchain_data_wrapper_.md#offchainerrors)››*

___

###  writeDataTo

▸ **writeDataTo**(`data`: string, `dataPath`: string): *Promise‹void›*

*Defined in [packages/contractkit/src/identity/offchain-data-wrapper.ts:68](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/offchain-data-wrapper.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |
`dataPath` | string |

**Returns:** *Promise‹void›*