<view class="header">
  <image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=214960966,170722410&fm=26&gp=0.jpg" mode="aspectFill" class="img-back"></image>
  <view class="none"></view>
  <view class="open-area">
    <image qq:if="{{hasUserInfo}}" src="{{userInfo.avatarUrl}}"></image>
  </view>

  <view class="nickname">
    <button qq:if="{{!hasUserInfo}}" class="click-area" open-type="getUserInfo" bindtap="tapOpen" >
    点击授权
    </button>
    <view qq:if="{{hasUserInfo}}">{{userInfo.nickName}}</view>
  </view>
  <view class="count">
    <view class="num">5</view>
    <view class="text">好文</view>
  </view>
</view>
<view class="body">
  <view class="title">喜欢</view>
  <view class="cards">
    <view class="card">麦地</view>
    <view class="card">麦地</view>
    <view class="card">麦地</view>
    <view class="card">麦地</view>
    <view class="card">麦地</view>
  </view>
</view>