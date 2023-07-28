module.exports = `<tr>
    <td
        style="width:100%;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
        <table cellspacing="0" cellpadding="0"
            style="width:100%;margin-top:16px;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;border-collapse:collapse;border-spacing:0">
            <tbody>
                <tr>
                    <td
                        style="width:100%;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px;background:#eff4f7;border-radius:12px">
                        <table cellspacing="0" cellpadding="0"
                            style="width:100%;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;border-collapse:collapse;border-spacing:0">
                            <tbody>
                                <tr>
                                    <td
                                        style="width:100%;margin-top:0;margin-right:0;margin-bottom:12px;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:20px;font-weight:600;line-height:1.25;color:#202020;text-align:left">
                                        Your Shipping Details
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="width:100%;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
                                        <table cellspacing="0" cellpadding="0"
                                            style="width:100%;margin-top:12px;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;border-collapse:collapse;border-spacing:0">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style="width:60%;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;text-align:left">
                                                        <table cellspacing="0" cellpadding="0"
                                                            style="width:100%;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;border-collapse:collapse;border-spacing:0">
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style="width:100%;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:12px;line-height:1.5">
                                                                        <span style="color:#6d6d6d">Order
                                                                            ID
                                                                        </span><a
                                                                            style="color:#268cb9;font-weight:700;text-decoration:none"
                                                                            href="#"
                                                                            target="_blank"
                                                                            >{{orderid}}</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        style="width:100%;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:12px;line-height:1.5">
                                                                        <span style="color:#6d6d6d">Courier Name
                                                                        </span><a
                                                                            style="color:#268cb9;font-weight:700;text-decoration:none"
                                                                            href="#"
                                                                            target="_blank"
                                                                            >{{shippingName}}</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        style="width:100%;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:12px;line-height:1.5">
                                                                        <span style="color:#6d6d6d">Order
                                                                            {{status}}
                                                                            on
                                                                        </span><span
                                                                            style="color:#202020;font-weight:700">{{date}}</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        style="width:100%;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:12px;line-height:1.5">
                                                                        <span style="color:#6d6d6d">Tracking ID
                                                                        </span><span
                                                                            style="color:#202020;font-weight:700">{{trackingId}}</span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td>
                                                                            <div class="box" style="
                                                                            padding: 10px;
                                                                            overflow: auto;">
                                                                                <img src="{{courier_image}}" alt={{orderid}} class="right" style="float: right;
                                                                            margin-left: 10px; height: 60px;">
                                                                            </div>
                                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>`;
