'use strict';

var app = angular.module('application', []);

app.controller('TransferCtrl', function($scope, $http) {
    $scope.transferData = {
        sender: '',
        receiver: '',
        amount: 0
    };

    $scope.transfer = function() {
        $http.post('/transfer', { // POST 요청으로 변경
            senderID: $scope.transferData.sender,
            songName: $scope.transferData.songName // 필요한 데이터 전달
        }).then(function(response) {
            alert('송금 성공: ' + response.data.message);
        }).catch(function(error) {
            alert('송금 실패: ' + (error.data ? error.data.message : '알 수 없는 오류'));
        });
    };
});
