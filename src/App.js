import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const carNames = await this.getCarNames();
    const carNamesArray = this.convertNamesToArray(carNames);
    this.validateCarNames(carNamesArray);
  }

  async getCarNames() {
    const carNames = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return carNames;
  }

  convertNamesToArray(carNames) {
    const carNamesArray = carNames.split(',');
    return carNamesArray;
  }

  validateCarNames(carNamesArray) {
    const pattern = /^[a-z]{1,5}$/;
    const uniqueCarNamesArray = [...new Set(carNamesArray)];

    carNamesArray.forEach((carName) => {
      if (!pattern.test(carName)) {
        throw new Error('[Error] 이름의 형식이 잘못됐습니다.');
      }
    });

    if (carNamesArray.length < 2) {
      throw new Error('[Error] 이름은 두 개 이상 입력해야 합니다.');
    }

    if (carNamesArray.length !== uniqueCarNamesArray.length) {
      throw new Error('[ERROR] 이름은 중복될 수 없습니다.');
    }
  }

  convertNamesToArray(carNames) {
    const carNamesArray = carNames.split(',');
    return carNamesArray;
  }

  validateCarNames(carNamesArray) {
    const pattern = /^[a-z]{1,5}$/;
    const uniqueCarNamesArray = [...new Set(carNamesArray)];

    carNamesArray.forEach((carName) => {
      if (!pattern.test(carName)) {
        throw new Error('[Error] 이름의 형식이 잘못됐습니다.');
      }
    });

    if (carNamesArray.length < 2) {
      throw new Error('[Error] 이름은 두 개 이상 입력해야 합니다.');
    }

    if (carNamesArray.length !== uniqueCarNamesArray.length) {
      throw new Error('[ERROR] 이름은 중복될 수 없습니다.');
    }
  }

  async getTryCount() {
    const tryCount = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    return Number(tryCount);
  }

  validateTryCount(tryCount) {
    if (!Number.isInteger(tryCount)) {
      throw new Error('[ERROR] 횟수는 숫자만 입력해야 합니다.');
    }

    if (tryCount < 1) {
      throw new Error('[ERROR] 횟수는 1이상의 자연수를 입력해야 합니다.');
    }
  }
}

export default App;
