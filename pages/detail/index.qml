<view class="header">
  <view class="time-area">
    <view class="day">{{currentArticle.date.date}}</view>
    <text>|</text>
    <view class="yearAndMonth">
      <view class="month">{{currentArticle.date.month}}</view>
      <view class="year">{{currentArticle.date.year}}</view>
    </view>
  </view>
  <text class="iconfont icon-like"></text>
</view>
<image src="{{currentArticle.img}}" mode="aspectFit" />

<view class="back-img"></view>
<view class="text-container">
  <view class="text">
  <view qq:for="{{currentArticle.contentList}}" qq:key="{{item}}">
  {{item}}
  </view>
  </view>
</view>

<view class="page">
  <view class="left {{page<=1?'leftDisabled':'leftActive'}}" bindtap="prePage"></view>
  <view class="title">
    {{currentArticle.title}}
  </view>
  <view class="right {{page>=allPage?'rightDisabled':'rightActive'}}" bindtap="nextPage"></view>
</view>