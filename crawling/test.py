import json
from concurrent.futures import ProcessPoolExecutor
from tiktokapipy.api import TikTokAPI

tiktok_channels = [
    "theanh28entertainment",
    "vtvcab.tintuc",
    "metubnews",
    "tiin.vn",
    "annhien_boiboi"
]

def default(obj):
    """Default JSON serializer."""
    import calendar, datetime

    if isinstance(obj, datetime.datetime):
        if obj.utcoffset() is not None:
            obj = obj - obj.utcoffset()
        millis = int(
            calendar.timegm(obj.timetuple()) * 1000 +
            obj.microsecond / 1000
        )
        return millis


def get_content(channel: str):
    print("Start getting channel: ", channel)
    results = []
    with TikTokAPI() as api:
        user = api.user(channel)
        for video in user.videos:
            d = video.dict()
            results.append(d)
            print(f'{channel} video: ', d.get('id'))
            # print(d.get('desc'), d.get('stats'))
    with open(f'{channel}.json', 'w') as f:
        json.dump(results, f, default=default)

def main():
    with ProcessPoolExecutor(max_workers=5) as executor:
        executor.map(get_content, tiktok_channels)

if __name__ == "__main__":
    main()

