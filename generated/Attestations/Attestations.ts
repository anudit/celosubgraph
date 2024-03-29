// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AttestationRegistered extends ethereum.Event {
  get params(): AttestationRegistered__Params {
    return new AttestationRegistered__Params(this);
  }
}

export class AttestationRegistered__Params {
  _event: AttestationRegistered;

  constructor(event: AttestationRegistered) {
    this._event = event;
  }

  get identifier(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get issuer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get signer(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get issuedOn(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get publishedOn(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class AttestationRevoked extends ethereum.Event {
  get params(): AttestationRevoked__Params {
    return new AttestationRevoked__Params(this);
  }
}

export class AttestationRevoked__Params {
  _event: AttestationRevoked;

  constructor(event: AttestationRevoked) {
    this._event = event;
  }

  get identifier(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get issuer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get signer(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get issuedOn(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get publishedOn(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class EIP712DomainSeparatorSet extends ethereum.Event {
  get params(): EIP712DomainSeparatorSet__Params {
    return new EIP712DomainSeparatorSet__Params(this);
  }
}

export class EIP712DomainSeparatorSet__Params {
  _event: EIP712DomainSeparatorSet;

  constructor(event: EIP712DomainSeparatorSet) {
    this._event = event;
  }

  get eip712DomainSeparator(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Attestations__getVersionNumberResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }

  getValue3(): BigInt {
    return this.value3;
  }
}

export class Attestations__identifierToAttestationsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getAccount(): Address {
    return this.value0;
  }

  getSigner(): Address {
    return this.value1;
  }

  getIssuedOn(): BigInt {
    return this.value2;
  }

  getPublishedOn(): BigInt {
    return this.value3;
  }
}

export class Attestations__lookupAttestationsResult {
  value0: Array<BigInt>;
  value1: Array<Address>;
  value2: Array<Address>;
  value3: Array<BigInt>;
  value4: Array<BigInt>;

  constructor(
    value0: Array<BigInt>,
    value1: Array<Address>,
    value2: Array<Address>,
    value3: Array<BigInt>,
    value4: Array<BigInt>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromAddressArray(this.value1));
    map.set("value2", ethereum.Value.fromAddressArray(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigIntArray(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigIntArray(this.value4));
    return map;
  }

  getCountsPerIssuer(): Array<BigInt> {
    return this.value0;
  }

  getAccounts(): Array<Address> {
    return this.value1;
  }

  getSigners(): Array<Address> {
    return this.value2;
  }

  getIssuedOns(): Array<BigInt> {
    return this.value3;
  }

  getPublishedOns(): Array<BigInt> {
    return this.value4;
  }
}

export class Attestations__lookupIdentifiersResult {
  value0: Array<BigInt>;
  value1: Array<Bytes>;

  constructor(value0: Array<BigInt>, value1: Array<Bytes>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytesArray(this.value1));
    return map;
  }

  getCountsPerIssuer(): Array<BigInt> {
    return this.value0;
  }

  getIdentifiers(): Array<Bytes> {
    return this.value1;
  }
}

export class Attestations extends ethereum.SmartContract {
  static bind(address: Address): Attestations {
    return new Attestations("Attestations", address);
  }

  EIP712_OWNERSHIP_ATTESTATION_TYPEHASH(): Bytes {
    let result = super.call(
      "EIP712_OWNERSHIP_ATTESTATION_TYPEHASH",
      "EIP712_OWNERSHIP_ATTESTATION_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EIP712_OWNERSHIP_ATTESTATION_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EIP712_OWNERSHIP_ATTESTATION_TYPEHASH",
      "EIP712_OWNERSHIP_ATTESTATION_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MAX_ATTESTATIONS_PER_IDENTIFIER(): BigInt {
    let result = super.call(
      "MAX_ATTESTATIONS_PER_IDENTIFIER",
      "MAX_ATTESTATIONS_PER_IDENTIFIER():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_ATTESTATIONS_PER_IDENTIFIER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_ATTESTATIONS_PER_IDENTIFIER",
      "MAX_ATTESTATIONS_PER_IDENTIFIER():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_IDENTIFIERS_PER_ADDRESS(): BigInt {
    let result = super.call(
      "MAX_IDENTIFIERS_PER_ADDRESS",
      "MAX_IDENTIFIERS_PER_ADDRESS():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_IDENTIFIERS_PER_ADDRESS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_IDENTIFIERS_PER_ADDRESS",
      "MAX_IDENTIFIERS_PER_ADDRESS():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  addressToIdentifiers(
    param0: Address,
    param1: Address,
    param2: BigInt
  ): Bytes {
    let result = super.call(
      "addressToIdentifiers",
      "addressToIdentifiers(address,address,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return result[0].toBytes();
  }

  try_addressToIdentifiers(
    param0: Address,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "addressToIdentifiers",
      "addressToIdentifiers(address,address,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  eip712DomainSeparator(): Bytes {
    let result = super.call(
      "eip712DomainSeparator",
      "eip712DomainSeparator():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_eip712DomainSeparator(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "eip712DomainSeparator",
      "eip712DomainSeparator():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getUniqueAttestationHash(
    identifier: Bytes,
    issuer: Address,
    account: Address,
    signer: Address,
    issuedOn: BigInt
  ): Bytes {
    let result = super.call(
      "getUniqueAttestationHash",
      "getUniqueAttestationHash(bytes32,address,address,address,uint64):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(identifier),
        ethereum.Value.fromAddress(issuer),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(signer),
        ethereum.Value.fromUnsignedBigInt(issuedOn)
      ]
    );

    return result[0].toBytes();
  }

  try_getUniqueAttestationHash(
    identifier: Bytes,
    issuer: Address,
    account: Address,
    signer: Address,
    issuedOn: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getUniqueAttestationHash",
      "getUniqueAttestationHash(bytes32,address,address,address,uint64):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(identifier),
        ethereum.Value.fromAddress(issuer),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(signer),
        ethereum.Value.fromUnsignedBigInt(issuedOn)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getVersionNumber(): Attestations__getVersionNumberResult {
    let result = super.call(
      "getVersionNumber",
      "getVersionNumber():(uint256,uint256,uint256,uint256)",
      []
    );

    return new Attestations__getVersionNumberResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getVersionNumber(): ethereum.CallResult<
    Attestations__getVersionNumberResult
  > {
    let result = super.tryCall(
      "getVersionNumber",
      "getVersionNumber():(uint256,uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Attestations__getVersionNumberResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  identifierToAttestations(
    param0: Bytes,
    param1: Address,
    param2: BigInt
  ): Attestations__identifierToAttestationsResult {
    let result = super.call(
      "identifierToAttestations",
      "identifierToAttestations(bytes32,address,uint256):(address,address,uint64,uint64)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return new Attestations__identifierToAttestationsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_identifierToAttestations(
    param0: Bytes,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<Attestations__identifierToAttestationsResult> {
    let result = super.tryCall(
      "identifierToAttestations",
      "identifierToAttestations(bytes32,address,uint256):(address,address,uint64,uint64)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Attestations__identifierToAttestationsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  initialized(): boolean {
    let result = super.call("initialized", "initialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_initialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("initialized", "initialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lookupAttestations(
    identifier: Bytes,
    trustedIssuers: Array<Address>
  ): Attestations__lookupAttestationsResult {
    let result = super.call(
      "lookupAttestations",
      "lookupAttestations(bytes32,address[]):(uint256[],address[],address[],uint64[],uint64[])",
      [
        ethereum.Value.fromFixedBytes(identifier),
        ethereum.Value.fromAddressArray(trustedIssuers)
      ]
    );

    return new Attestations__lookupAttestationsResult(
      result[0].toBigIntArray(),
      result[1].toAddressArray(),
      result[2].toAddressArray(),
      result[3].toBigIntArray(),
      result[4].toBigIntArray()
    );
  }

  try_lookupAttestations(
    identifier: Bytes,
    trustedIssuers: Array<Address>
  ): ethereum.CallResult<Attestations__lookupAttestationsResult> {
    let result = super.tryCall(
      "lookupAttestations",
      "lookupAttestations(bytes32,address[]):(uint256[],address[],address[],uint64[],uint64[])",
      [
        ethereum.Value.fromFixedBytes(identifier),
        ethereum.Value.fromAddressArray(trustedIssuers)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Attestations__lookupAttestationsResult(
        value[0].toBigIntArray(),
        value[1].toAddressArray(),
        value[2].toAddressArray(),
        value[3].toBigIntArray(),
        value[4].toBigIntArray()
      )
    );
  }

  lookupIdentifiers(
    account: Address,
    trustedIssuers: Array<Address>
  ): Attestations__lookupIdentifiersResult {
    let result = super.call(
      "lookupIdentifiers",
      "lookupIdentifiers(address,address[]):(uint256[],bytes32[])",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddressArray(trustedIssuers)
      ]
    );

    return new Attestations__lookupIdentifiersResult(
      result[0].toBigIntArray(),
      result[1].toBytesArray()
    );
  }

  try_lookupIdentifiers(
    account: Address,
    trustedIssuers: Array<Address>
  ): ethereum.CallResult<Attestations__lookupIdentifiersResult> {
    let result = super.tryCall(
      "lookupIdentifiers",
      "lookupIdentifiers(address,address[]):(uint256[],bytes32[])",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddressArray(trustedIssuers)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Attestations__lookupIdentifiersResult(
        value[0].toBigIntArray(),
        value[1].toBytesArray()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  registryContract(): Address {
    let result = super.call(
      "registryContract",
      "registryContract():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_registryContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "registryContract",
      "registryContract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  revokedAttestations(param0: Bytes): boolean {
    let result = super.call(
      "revokedAttestations",
      "revokedAttestations(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBoolean();
  }

  try_revokedAttestations(param0: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "revokedAttestations",
      "revokedAttestations(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get test(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BatchRevokeAttestationsCall extends ethereum.Call {
  get inputs(): BatchRevokeAttestationsCall__Inputs {
    return new BatchRevokeAttestationsCall__Inputs(this);
  }

  get outputs(): BatchRevokeAttestationsCall__Outputs {
    return new BatchRevokeAttestationsCall__Outputs(this);
  }
}

export class BatchRevokeAttestationsCall__Inputs {
  _call: BatchRevokeAttestationsCall;

  constructor(call: BatchRevokeAttestationsCall) {
    this._call = call;
  }

  get issuer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get identifiers(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get accounts(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }
}

export class BatchRevokeAttestationsCall__Outputs {
  _call: BatchRevokeAttestationsCall;

  constructor(call: BatchRevokeAttestationsCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RegisterAttestationCall extends ethereum.Call {
  get inputs(): RegisterAttestationCall__Inputs {
    return new RegisterAttestationCall__Inputs(this);
  }

  get outputs(): RegisterAttestationCall__Outputs {
    return new RegisterAttestationCall__Outputs(this);
  }
}

export class RegisterAttestationCall__Inputs {
  _call: RegisterAttestationCall;

  constructor(call: RegisterAttestationCall) {
    this._call = call;
  }

  get identifier(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get issuer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get account(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get signer(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get issuedOn(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class RegisterAttestationCall__Outputs {
  _call: RegisterAttestationCall;

  constructor(call: RegisterAttestationCall) {
    this._call = call;
  }
}

export class RegisterAttestationAsIssuerCall extends ethereum.Call {
  get inputs(): RegisterAttestationAsIssuerCall__Inputs {
    return new RegisterAttestationAsIssuerCall__Inputs(this);
  }

  get outputs(): RegisterAttestationAsIssuerCall__Outputs {
    return new RegisterAttestationAsIssuerCall__Outputs(this);
  }
}

export class RegisterAttestationAsIssuerCall__Inputs {
  _call: RegisterAttestationAsIssuerCall;

  constructor(call: RegisterAttestationAsIssuerCall) {
    this._call = call;
  }

  get identifier(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get issuedOn(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RegisterAttestationAsIssuerCall__Outputs {
  _call: RegisterAttestationAsIssuerCall;

  constructor(call: RegisterAttestationAsIssuerCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RevokeAttestationCall extends ethereum.Call {
  get inputs(): RevokeAttestationCall__Inputs {
    return new RevokeAttestationCall__Inputs(this);
  }

  get outputs(): RevokeAttestationCall__Outputs {
    return new RevokeAttestationCall__Outputs(this);
  }
}

export class RevokeAttestationCall__Inputs {
  _call: RevokeAttestationCall;

  constructor(call: RevokeAttestationCall) {
    this._call = call;
  }

  get identifier(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get issuer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get account(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class RevokeAttestationCall__Outputs {
  _call: RevokeAttestationCall;

  constructor(call: RevokeAttestationCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
